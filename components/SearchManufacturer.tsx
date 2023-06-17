
'use client';
import React, { Fragment } from 'react'

import { Combobox,Transition } from '@headlessui/react';
import Image from 'next/image';

import { useState } from 'react';
import { manufacturers } from './constants';
// const SearchManufacturer = ({manufactuer,setManuFacturer} : ) => {
interface SearchManufacturerProps{
 manufacturer:string;
 setManufacturer :(manufacturer:string)=> void;   
}

const SearchManufacturer : React.FC<SearchManufacturerProps> = ({

    manufacturer,setManufacturer


}) =>{

// we will use headless ui to do autocomplete

        const [query, setQuery] = useState('')
// check if query, if we dont then return all manufacturers. else return only the ones we filter for
            const filteredManufacturers = query==="" ? manufacturers: manufacturers.filter((item)=>(

                item.toLowerCase()
                .replace(/\s+/g,"")
    // remove empty space from query and manufacturer list in addition to lower case. Therefore this will work in any case
                .includes(query.toLowerCase().replace(/\s+/g,""))

            ))
                // only show the ones that match up
    return(

        <div className='search-manufacturer'>
            


            <Combobox value={manufacturer} onChange={setManufacturer}>

{/* the onchange automatically puts the name in the search bar when we click on it.  */}
                    <div className='relative w-full'>

<Combobox.Button className='absolute top-[14px]'>

<Image src='/car-logo.svg' width={20} height={20} className="ml-4" alt="Car Logo"   />

</Combobox.Button>



{/* make some inputs for our combo box */}


            <Combobox.Input className='search-manufacturer__input' placeholder='Car Make' displayValue={(manufacturer : string) => manufacturer} 
                onChange={(e) => setQuery(e.target.value)}

                // this changes the value of our search bar to whatever is written once we type
            />

                        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' 
                        // if you go away from bar it resets. 
                        afterLeave={() => setQuery('')} >


                    <Combobox.Options>

                        {/* /* get all our options from constants */}
                            {/* {filteredManufacturers.length===0 && query!=="" ? */}
                                {/* <Combobox.Option value={query} className="search-manufacturer__option"> */}
                                    {/* Create "{query}" */}
                                    {/* this makes each of our option boxes with a valid name.  */}

{/*                                         dont need above code as repetive/unnnecsary */}
                                {/* </Combobox.Option> */} 
                            {/* ): */}
                            
                            {
                                filteredManufacturers.map((item) =>(
                                    // this background color controls the hover effect on the scroll bar
                    <Combobox.Option key={item} className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}` }
                                    value={item}
                    >
{/* changes color if we click on the box */}
                                        {/* {item} */}

                                        {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* this makes it look much cleaner  */}

                        {/* Show a blue background  if the option is selected or hovered over */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}





                     </Combobox.Option>
                                )
                            )}

                    </Combobox.Options>

                                    {/* this is our bar finding stuff dynamically */}
                            
                        </Transition>

                    </div>

            </Combobox>
            
            
            </div>

    )

}
 
 
 
  

export default SearchManufacturer
'use client'
import React from 'react'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {Listbox, Transition} from '@headlessui/react'

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
      // takes in a title and options. Title is the front of our box and the boxes are in options. 

  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option
            // it sets it to the first year by default


  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
        // this uses our util file and creates the new path

      // we get our path above and then push it below. 
    router.push(newPathName+"#discover");
  };

  

  return (
    <div className='w-fit'>
{/* w-fit makes everything fit width wise.  */}


      <Listbox
      // list box has all our options. 
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <Listbox.Button  className='custom-filter__btn' >
                {/*  gives styles */}

            <span className='block truncate'>{selected.title}</span>
                {/* this gets our years truncated */}


            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />

            {/* has up and down ability */}
          </Listbox.Button>
          {/* Transition for displaying the options */}


          {/* this slowly opens it up */}
          <Transition

            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* Map over the options and display them as listbox options */}


                  {/* if you click on something, then it makes it have blue background */}

              {options.map((option) => (
                <Listbox.Option
                  key={option.title}

                  // this is what we put in our box ^^

                  className={({ active }) =>
                    `relative cursor-default select-none py-2 hover:bg-primary-blue px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`

                    // by putting active in the class name {}, it lets you do the stuff only when its active. 
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>

                    {/* if you pick a option, it makes it bigger.  */}
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
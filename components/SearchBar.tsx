"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {SearchManufacturer} from "./";

// import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (

// since search button only used in searchbar, we can just create it here. 

  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
   {/* -ml means it will jump into the input a little bit */}
    <Image

    // sets our search icon
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');

// this handles state of which manufactuer is chosen. Following has state of model


// this also lets us hook to a certain thing that we need. 

  const [model, setModel] = useState("");

// keeps track of our car model

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  
        // change the url so that the server re renders the new car. 
  // dont refresh on change cuz react. 
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {

      // cant search if everything is empty
      return alert("Please prove more information");
    }



    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());


     

  };

  const updateSearchParams = (model: string, manufacturer: string) => {


    // Create a new URLSearchParams object using the current URL search parameters
  
  
    const searchParams = new URLSearchParams(window.location.search);



    // Update or delete the 'model' search parameter based on the 'model' value


        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }

        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
          searchParams.delete("manufacturer");
        }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;


    // this gives the new url. We push it
    router.push(newPathname+"#discover");
// console.log('hi');
   
    window.scrollTo(1000,1000);

  

  };

  return (




    <form className='searchbar' onSubmit={handleSearch}>
      
      {/* use a form for our search bar.  */}

      {/* we want our search bar to have autocomplete feature.   */}
      <div className='searchbar__item'>

        {/* this does our autocomplete feature.  */}
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>


        {/* this has our second input which is our model.  */}

      <div className='searchbar__item'>
        <Image

          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
        // has our input for model
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Car Model'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      {/* this shows them in different places depending on the size of our window.  All we have to do is change the url */}
      <SearchButton otherClasses='max-sm:hidden' />
      
    </form>
  );
};

export default SearchBar;
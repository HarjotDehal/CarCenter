'use client'
import React from 'react'

import Link from 'next/link'
// this lets us link to different pages

import Image from 'next/image'


import CustomButton from './CustomButton'
//  we need to make buttons in our nav

const Navbar = () => {


  const handleScroll = () =>{
    const nextSection = document.getElementById("bottom");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
}
 

  return (
    <header className='w-full absolute z-10'>
        {/* z-10 lets is show above other content */}

    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
{/* justify between makes sure items show up on left and right side with space gap in the middle.  */}

    <Link href="/" className='flex justify-center items-center'>
        <Image src="/finallogo.png" alt='Car Hub Logo' width={248} height={18} className='object-contain ' />

        {/* this shows our top left logo.  */}
    </Link>

    <CustomButton title="Contact Us" btnType="button" containerStyles='text-red-500 hover:bg-gray-200 rounded-full bg-white min-w-[130px]'  handleClick={handleScroll}/>

    </nav>



    </header>
  )
}

export default Navbar
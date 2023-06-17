
'use client'

import React from 'react'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
 
 
//  lets uss scroll
const handleScroll = () =>{
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
}
 
 
    return (


    // this sets certain styles in our global css
    <div className='hero'>
        
    <div className='flex-1 pt-28 padding-x'>


        <h1 className='hero__title'>
            
            Book or rent a car of your choosing— quickly and easily!
            
            
            </h1> 


            <p className='hero__subtitle'>Simplify your car rental experience through our seamless booking process.




</p>


        {/* make a button component */}
            <CustomButton title="View Inventory" containerStyles="bg-red-500 w-full hover:bg-red-700 text-white rounded-full mt-10" handleClick={handleScroll} />
{/* passes a value of explore cars to our button */}
    </div>


<div className='hero__image-container'>

<div className='hero__image'>

<Image src='/g63.png'  alt='hero' fill className='object-contain '  />
</div>

<div className='hero__image-overlay'/>


</div>


    </div>



  )
}

export default Hero
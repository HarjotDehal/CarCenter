
'use client'

// use client as it is a client used button. Do not need it on server side. 

import React from 'react'

import Image from 'next/image'
import { CustomButtonProps } from '@/types'
// props used to change the button
// have to define so it works on other page
const CustomButton = (
{
    title,containerStyles,handleClick,btnType, textStyles, rightIcon
}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    // either or
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >


<span className={`flex-1 ${textStyles}`}>  {title} </span>
   

{/* if right icon exists then do following */}
{rightIcon && (

  <div className='relative w-6 h-6'>

    <Image src={rightIcon} alt='right icon' fill className='object-contain'/>

  </div>
)}



    </button>
  )
}

export default CustomButton
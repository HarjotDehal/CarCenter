'use client'

import { ShowMoreProps } from '@/types'
// since it modiefies our router

import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'




const ShowMore = ({pageNumber,isNext} : ShowMoreProps) => {


    const router = useRouter();


    const handleNavigation =() =>{


        const newLimit = (pageNumber +1) *10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);

    }


  return (

            <div className='w-full flex-center gap-5 mt-10' >

                    {/* this is our button for getting more */}
                    {!isNext &&(

                        <CustomButton  title='Show More' btnType = 'button' containerStyles='bg-red-500 hover:bg-red-700 rounded-full w-3/5 text-white' handleClick={handleNavigation} />
                    )}


            </div>



  )
}

export default ShowMore
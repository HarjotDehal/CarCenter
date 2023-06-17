"use client"

import { CarProps } from '@/types';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
// when using states, it will be a client page
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';
import ImageModal from './ImageModal'

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({car} : CarCardProps ) => {
   
  const [imageModalOpen1, setImageModalOpen1] = useState(false);
   
   
    const { city_mpg, year, make, model, transmission, drive } = car;
// this has all the properties that we need.

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year,make,drive);
   
   
   
    return (
        <div className="car-card group">

{/* this gives us a nice texture for our cards. Puts them in a group */}

          <div className="car-card__content">



            <h2 className="car-card__content-title">
                            {/* this is our cars title */}
              {make} {model}
            </h2>
          </div>
    
          <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>


            <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
            {/* this gives a value of renting the car */}
            {carRent}

{/* this puts our car rent value in the middle, a dollar above it, and then a day after.  */}
            <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
          </p>
    
          <div className='relative w-full h-40 my-3 object-contain'>

          <ImageModal src={generateCarImageUrl(car)} isOpen={imageModalOpen1} onClose={() => setImageModalOpen1(false)} />

            <Image src={generateCarImageUrl(car)}  alt='car model' fill priority className='object-contain cursor-pointer' onClick={() => setImageModalOpen1(true)}  />

            {/* fill priority means that it will load first before everything else.  */}

          {/* will use image api later, just use generic rn */}
          



          </div>
    
          <div className='relative flex w-full mt-2'>


                    <div className='flex group-hover:invisible w-full justify-between text-grey'>
            {/* this makes it completely invisible whenever we hover over it. Then the button shows up */}




                    <div className='flex flex-col justify-center items-center gap-2'>

                            {/* this will hold the 3 icons and information. Transmission, mpg and drive */}


                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                        {transmission === "a" ? "Automatic" : "Manual"}
                                {/* only check if transmission is automatic, if not then manual */}

                        </p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        {/* this has if its front or rear wheel drive.  */}
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                    </div>
            
            <div className="car-card__btn-container">
                        {/* this is the button that shows up when we hover. It is a view more */}



                        {/* // this makes it white text and a arrow. Type script doesnt allow until we fix it.  */}

              <CustomButton 
                title='Check Details'
                containerStyles='w-full py-[16px] rounded-full bg-red-500'
                textStyles='text-white text-[14px] leading-[17px] font-bold'
                rightIcon='/right-arrow.svg'
                handleClick={() => setIsOpen(true)}

                // opening it when clicked. 
              />
            </div>
          </div>
    
          <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />

        
{/* this is our next component which opens if we click on our car card. Makes sense.  We also pass the close function, so it closes on close  */}


        </div>
      );
    };
    
    export default CarCard;
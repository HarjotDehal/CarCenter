'use client'

import { Fragment, useState } from "react";
// import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
// import { CarProps } from "@types";
// import { generateCarImageUrl } from "@utils";
import Image from "next/image";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import ImageModal from './ImageModal'

interface CarDetailsProps {

    // these are inputs given from carcard

    // 
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {



  const [imageModalOpen1, setImageModalOpen1] = useState(false);

  const [imageModalOpen2, setImageModalOpen2] = useState(false);
  const [imageModalOpen3, setImageModalOpen3] = useState(false);
  const [imageModalOpen4, setImageModalOpen4] = useState(false);




  return (

  
  <>


  {/* we have a transition when we click on a car so it isnt an instant switch */}


    <Transition appear show={isOpen} as={Fragment}>

        {/* show transition on open and have it be a fragment */}

      <Dialog as='div' className='relative z-10' onClose={closeModal}>

            {/* close our extra tab on close click */}

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
                    {/* all of our padding and stylings, makes sure that it views nicely. The scale-100 makes the dialogue appear like it expands  */}

          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
                    {/*  */}

                  {/* this diologue panel has a button which is in charge of closing our detail section */}
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>

{/* the shadow makes the main screen shadow when we click on a detail so it looks like it appears above.  */}
                            {/* this makes it take 90 percent of the height.   text-left puts it on left side obviously. Many things which make sense */}

                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                //   Nice
                  onClick={closeModal}
                >
                  <Image
                //   this image is a X
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'> 
                {/* this div has all the other ones and has all the information */}


                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                {/* makes a blue border background for first part.  */}
                                <ImageModal src={generateCarImageUrl(car,'angle')} isOpen={imageModalOpen4} onClose={() => setImageModalOpen4(false)} />

                                <Image src= {generateCarImageUrl(car,'angle')}  alt='car model' fill priority className='object-contain cursor-pointer' onClick={() => setImageModalOpen4(true)} />
                  </div>

                  <div className='flex gap-3'>               

                  {/* this has our 3 smaller images which shows the side back and trunk. Cool*/}
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                 
          <ImageModal src={generateCarImageUrl(car,'29')} isOpen={imageModalOpen1} onClose={() => setImageModalOpen1(false)} />
                 
                 
                 
                    <Image src={generateCarImageUrl(car,'29')}  alt='car model' fill priority className='object-contain cursor-pointer' onClick={() => setImageModalOpen1(true)} />
                    </div>


                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                  
          <ImageModal src={generateCarImageUrl(car,'33')} isOpen={imageModalOpen2} onClose={() => setImageModalOpen2(false)} />
                  
                    <Image src={generateCarImageUrl(car,'33')}  alt='car model' fill priority className='object-contain cursor-pointer' onClick={() => setImageModalOpen2(true)}  />
                    </div>


                                    
                    <ImageModal src={generateCarImageUrl(car,'13')} isOpen={imageModalOpen3} onClose={() => setImageModalOpen3(false)} />

                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src={generateCarImageUrl(car,'13')}  alt='car model' fill priority className='object-contain cursor-pointer' onClick={() => setImageModalOpen3(true)} />
                    </div>
                  </div>
                </div>


                        {/* we have done the pictures so now we show information */}

                {/* <div>Click to enlarge</div> */}
                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize text-red-500'>

                    {/* thhis has our car title. Change styles later */}
                    {car.make} {car.model}  (Click to enlarge)
                  </h2>

                            {/* we want to show the keys of the object along with the values */}


                            {/* we do this by using the object.entries syntax. It gives key/value pairs.  */}
                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >

                        <h4 className='text-grey capitalize'>
                            {/* capitalizes our info on left.  */}
                          {key.split("_").join(" ")}

                          {/* it switches the _ in our index type section for a " " */}
                        </h4>
                        <p className='text-black-100 font-semibold capitalize'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
)};

export default CarDetails;
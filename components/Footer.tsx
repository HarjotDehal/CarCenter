import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import { footerLinks } from './constants'


const Footer = () => {
  return (

<footer id='bottom' className='flex flex-col text-black-100 mt-5 border-t border-gray-100' > 




<div className='flex max-md:flex-col flax-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
{/* on meds it is flex col, flex wrap on all etc.  */}

<div className='flex flex-col justify-start items-start gap-6'>



<div className='font-bold text-6xl text-red-500'>Contact Us</div>


<Image src='/finallogo.png' alt='logo' width={118} height={18} className='object-contain  mt-28'/>


{/* <p className='text-base text-gray-700 font-bold'> Harjots Car Center</p> */}
</div>




<div className='footer__links'>
    {footerLinks.map((link) =>(
        <div key={link.title} className='footer__link'>

        <h3 className='font-bold'>{link.title}</h3>

        {link.links.map((item)=>(
            <Link
                key={item.title}
                href={item.url}
                className='text-gray-500'>
{/* shows all our small items */}
                    {item.title}
                </Link>
        ))}

        {/* this renders titles in our footer section */}
            </div>
    ))}
{/* map over all of our different sections */}
{/* we put a lot of different names in our constants. We can change it later. It helps */}


</div>
</div>

<div className='flex justify-between items-center flex-wrap  border-t border-gray-100 sm:px-16 px-6 py-10 '>

<p> @2023 Harjot Dehal CarCenter</p>
    <div className='footer__copyrights-link'>
        <Link href="/" className='text-gray-500'
        > Privacy Policy</Link>

<Link href="/" className='text-gray-500'
        > Terms of Use</Link>
    </div>

</div>






</footer>


    )
}

export default Footer
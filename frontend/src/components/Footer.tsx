import React from 'react'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import IconFooter from './IconFooter';

const Footer:React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
        <div className='flex justify-between pb-10'>
            <div className='flex flex-col max-w-72 gap-5'>
                <span className='font-medium text-lg'>About Tech<span className='text-blue-500'>Quality</span></span>
                <p className='text-slate-600 font-light'>We handle the best quality and the best prices, we offer high quality and long lasting products, we have a great variety of products that you will like.</p>

                <div className='flex gap-3 items-center '>
                    <IconFooter link='#' icon={<Facebook className='w-5 h-5 text-slate-400 hover:text-slate-600 hover:transition duration-300'/>}/>
                    <IconFooter link='#' icon={<Instagram className='w-5 h-5 text-slate-400 hover:text-slate-600 hover:transition duration-300'/>}/>

                </div>
            </div>

            <div className='flex flex-col max-w-72 gap-5'>
                <span className='font-medium text-lg'>Contact Us</span>

                <div className='flex gap-2 items-center'>
                    <MapPin className='w-5 h-5 text-slate-400'/>
                    <span className='text-slate-600 font-light'>123 Fashion Street, Milan, Italy.</span>
                </div>

                <div className='flex gap-2'>
                    <Phone className='w-5 h-5 text-slate-400'/>
                    <span className='text-slate-600 font-light'>+1 (555) 123-4567</span>
                </div>

                <div className='flex gap-2'>
                    <Mail className='w-5 h-5 text-slate-400'/>
                    <span className='text-slate-600 font-light'>support@techquality.com</span>
                </div>
            </div>

        </div>

        <hr className='text-slate-100'/>

        <div className='flex pt-10 justify-between'>

            <span className='text-slate-500 text-sm'>© 2025 TechQuality. All rights reserved.</span>
            <div className='flex gap-5'>
                <a href="#" className='text-slate-500 text-sm hover:text-slate-700 hover:underline hover:transition-all duration-300'>Provacy Policy</a>
                <a href="#" className='text-slate-500 text-sm hover:text-slate-700 hover:underline hover:transition-all duration-300'>Terms of Service</a>
                <a href="#" className='text-slate-500 text-sm hover:text-slate-700 hover:underline hover:transition-all duration-300'>Cookie Policy</a>

            </div>

        </div>
      
    </div>
  )
}

export default Footer

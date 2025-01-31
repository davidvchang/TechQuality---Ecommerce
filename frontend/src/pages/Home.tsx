import React from 'react'
import NavBar from '../components/NavBar'
import PresentationIMG from '../assets/img/pexels-pixabay-39559.webp'
import { ArrowRight, Truck, Shield, Clock, CreditCard } from 'lucide-react';
import Feature from '../components/Feature';

const Home:React.FC = () => {
  return (
    <section>
        <NavBar/>

        <div className='w-full h-full'>
          <img src={PresentationIMG} alt="" className='h-screen w-full brightness-40 relative'/>

          <div className='absolute flex flex-col gap-5 items-center top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
            <span className='text-white text-6xl font-medium'>Technological Quality</span>
            <span className='text-white text-2xl font-light'>quality and long-lasting gadgets</span>
            <a href="/products" className='flex gap-3 items-center px-8 py-3 text-white border-2 text-lg font-light hover:text-black hover:bg-white hover:border-white hover:transition duration-300'>
            Explore Products
            <ArrowRight/>
            </a>
          </div>
        </div>

        <div className='flex flex-wrap w-full justify-between bg-slate-50 px-5'>
          <Feature icon={<Truck className='w-8 h-8'/>} title='Free Premium Shipping' description='On orders over $300'/>
          <Feature icon={<Shield className='w-8 h-8'/>} title='6-Months Warranty' description='On all products'/>
          <Feature icon={<Clock className='w-8 h-8'/>} title='30-Day Returns' description='Hassle-free returns'/>
          <Feature icon={<CreditCard className='w-8 h-8'/>} title='Secure Payment' description='256-bit encryption'/>
        </div>
    </section>
  )
}

export default Home

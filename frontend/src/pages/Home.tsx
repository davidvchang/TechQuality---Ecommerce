import React from 'react'
import NavBar from '../components/NavBar'
import PresentationIMG from '../assets/img/pexels-pixabay-39559.webp'
import { ArrowRight } from 'lucide-react';

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
    </section>
  )
}

export default Home

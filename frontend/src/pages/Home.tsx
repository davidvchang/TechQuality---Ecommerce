import React from 'react'
import PresentationIMG from '../assets/img/Portada.webp'
import { ArrowRight, Truck, Shield, Clock, CreditCard } from 'lucide-react';
import Feature from '../components/Feature';
import AlexaImg from '../assets/img/Alexa.webp'
import CategoryHome from '../components/CategoryHome';
import ProductHome from '../components/Product';
import Subscribe from '../components/Subscribe';

const Home:React.FC = () => {
  return (
    <section>

        <div className='w-full h-full'>
          <img src={PresentationIMG} alt="" className='w-full brightness-40 relative object-cover ' style={{height: "calc(100vh - 64px)"}}/>

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


        <div className='flex flex-col w-full items-center p-10 gap-10'>
          <span className='text-2xl'>Categories</span>

          <div className='flex flex-wrap w-full gap-10'>
            <CategoryHome image={AlexaImg} title_category='Smart Gadgets & Accessories' description_category='Discover all our smart accessories'/>
            <CategoryHome image={AlexaImg} title_category='Smart Gadgets & Accessories' description_category='Discover all our smart accessories'/>
            <CategoryHome image={AlexaImg} title_category='Smart Gadgets & Accessories' description_category='Discover all our smart accessories'/>
          </div>

          <div className='w-full flex justify-center pb-10'>
            <a href="" className='w-fit px-8 py-3  text-center border-2 hover:bg-blue-500 hover:text-white hover:transition-colors duration-300 hover:border-blue-500'>All Categories</a>
          </div>
        </div>


        <div className='flex flex-col w-full items-center p-10 gap-10 bg-slate-50'>
          <span className='text-2xl'>Last Products</span>

          <div className='flex flex-wrap w-full gap-10'>
            <ProductHome image={AlexaImg} name_product='Alexa' type='Smart' price={799.99}/>
            <ProductHome image={AlexaImg} name_product='Alexa' type='Smart' price={799.99}/>
            <ProductHome image={AlexaImg} name_product='Alexa' type='Smart' price={799.99}/>
            <ProductHome image={AlexaImg} name_product='Alexa' type='Smart' price={799.99}/>
          </div>

          <div className='w-full flex justify-center pb-10'>
            <a href="" className='w-fit px-8 py-3  text-center border-2 hover:bg-blue-500 hover:text-white hover:transition-colors duration-300 hover:border-blue-500'>More Products</a>
          </div>
        </div>


        <div className='w-full h-[22rem] flex flex-col bg-[#101827] justify-center'>
          <Subscribe/>
        </div>

    </section>
  )
}

export default Home

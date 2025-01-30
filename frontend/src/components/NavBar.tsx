import React from 'react'
import { User, ShoppingCart } from 'lucide-react';
import Nav from './Nav';

const NavBar:React.FC = () => {
  return (
    <div className='h-16 w-full flex items-center justify-between px-5 border-b border-b-slate-200 shadow'>
        <h1 className='font-semibold text-2xl'>Tech<span className='text-blue-500'>Quality</span></h1>

        <div className='flex gap-10'>
            <Nav link='/' text='Home'/>
            <Nav link='/products' text='Products'/>
            <Nav link='/about' text='About'/>
            <Nav link='/contact' text='Contact Us'/>
        </div>

        <div className='flex gap-5'>
            <button className='w-8 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><User/></button>
            <button className='w-8 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><ShoppingCart/></button>
        </div>
      
    </div>
  )
}

export default NavBar

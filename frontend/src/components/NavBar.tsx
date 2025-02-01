import React from 'react'
import { User, ShoppingCart } from 'lucide-react';
import Nav from './Nav';

interface PropsNavBar {
  numberCart?: number
}

const NavBar:React.FC<PropsNavBar> = ({numberCart}) => {
  return (
    <div className='h-16 w-full flex items-center justify-between px-5 bg-white border-b border-b-slate-200 shadow fixed z-10'>
        <h1 className='font-semibold text-2xl'>Tech<span className='text-blue-500'>Quality</span></h1>

        <div className='flex gap-10'>
            <Nav link='/' text='Home'/>
            <Nav link='/products' text='Products'/>
            <Nav link='/about' text='About'/>
            <Nav link='/contact' text='Contact Us'/>
        </div>

        <div className='flex gap-5'>
            <button className='w-8 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><User/></button>
            <div className='flex'>
              <button className='w-7 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><ShoppingCart/></button>
              <div className=' bg-blue-500 px-1 py-0 w-fit h-fit rounded-full flex items-center'>
                <span className='text-xs font-bold text-white'>{numberCart}</span>
              </div>

            </div>
        </div>
      
    </div>
  )
}

export default NavBar

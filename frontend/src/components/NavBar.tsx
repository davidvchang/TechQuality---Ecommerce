import React from 'react'
import { User, ShoppingCart } from 'lucide-react';
import Nav from './Nav';

interface PropsNavBar {
  numberCart?: number
}

const NavBar:React.FC<PropsNavBar> = ({numberCart}) => {

  
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  
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
            <a href='/login' className='relative w-8 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><User/></a>
            {localStorage.getItem('token') !== null && (
              <div className='flex flex-col absolute top-12 right-22 bg-white p-2 gap-5 shadow border border-slate-100 rounded'>
                <span className='text-slate-600 font-light text-sm'>dvalenzuelachagn@gmail.com</span>
                <button className='text-sm bg-red-500 py-2 text-white rounded hover:brightness-95 hover:transition duration-300 cursor-pointer' onClick={logout}>Logout</button>
              </div>

            )}
            <div className='flex'>
              <a href='/cart' className='w-7 h-8 hover:text-blue-500 hover:transition duration-300 hover:cursor-pointer'><ShoppingCart/></a>
              <div className=' bg-blue-500 px-1 py-0 w-fit h-fit rounded-full flex items-center select-none'>
                <span className='text-xs font-bold text-white'>{numberCart}</span>
              </div>

            </div>
        </div>
      
    </div>
  )
}

export default NavBar

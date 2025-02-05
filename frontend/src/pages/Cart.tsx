import React, { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart:React.FC = () => {

  return (  
    <section className='flex flex-col p-10 gap-5 bg-slate-50'>
        <span className='text-2xl'>Your Shopping Cart</span>

        <div className='w-full flex justify-between gap-14'>

            <div className='flex justify-between bg-white p-5 rounded-lg border shadow w-full border-slate-100'>

                <div className='flex items-center gap-5'>
                    <div className='bg-red-400 min-w-24 min-h-24 max-h-24 overflow-hidden rounded'>
                        <img src="" alt="" className='w-full h-full'/>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <span className='font-medium text-lg'>Alexa</span>
                            <span className='text-sm text-gray-500 font-normal'>Technology</span>
                            <span className='text-sm text-gray-500 font-normal'>Unit price: $799.99</span>
                        </div>

                        <div className='flex border w-fit border-slate-200 rounded gap-2 px-1 items-center'>
                            <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300'><Minus className='w-4 h-4'/></button>
                            <span className='py-2 px-1'>{1}</span>
                            <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300'><Plus className='w-4 h-4'/></button>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-end h-full justify-between'>
                    <span>$799.99</span>
                    <button className='w-fit p-2 rounded cursor-pointer hover:text-red-500 hover:bg-red-100 hover:transition duration-300'><Trash2 className='w-5 h-5'/></button>

                </div>

            </div>
    

        </div>
    </section>
  )
}

export default Cart

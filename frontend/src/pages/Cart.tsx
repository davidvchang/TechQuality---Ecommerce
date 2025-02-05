import React, { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart:React.FC = () => {

    const [numberQuantity, setNumberQuantity] = useState<number>(1)

    const restQuantity = () => {
        if(numberQuantity < 1) {
            setNumberQuantity(1)
        }
        else if(numberQuantity > 0){
            setNumberQuantity(numberQuantity - 1)
        }
    }

  return (  
    <section className='flex flex-col p-10 gap-5 bg-slate-50'>
        <span className='text-2xl'>Your Shopping Cart</span>

        <div className='w-full flex justify-between gap-10'>

            {/* CONTAINER PRODUCTS IN CART */}
            <div className='w-full flex flex-col justify-between gap-1'>

                {/* CONTAINER PRODUCT */}
                <div className='flex justify-between bg-white p-5 rounded-lg border w-full h-fit border-slate-100'>

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
                                <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300' onClick={restQuantity}><Minus className='w-4 h-4'/></button>
                                <span className='py-2 px-1'>{numberQuantity}</span>
                                <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300' onClick={() => setNumberQuantity(numberQuantity + 1)}><Plus className='w-4 h-4'/></button>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col items-end min-h-full justify-between'>
                        <span>$799.99</span>
                        <button className='w-fit p-2 rounded cursor-pointer hover:text-red-500 hover:bg-red-100 hover:transition duration-300'><Trash2 className='w-5 h-5'/></button>

                    </div>

                </div>

            </div>

            {/* ORDER SUMMARY */}
            <div className='p-5 gap-5 min-w-96 w-[42rem] h-fit flex flex-col bg-white rounded-lg border border-slate-100'>
                <span className='font-medium text-lg'>Order Summary</span>

                <div className='flex flex-col gap-2 pb-5 border-b border-b-slate-200'>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm text-slate-500'>Subtotal</span>
                        <span className='text-sm'>$799.99</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm text-slate-500'>Shipping</span>
                        <span className='text-sm'>$00.00</span>
                    </div>

                </div>

                <div className='flex w-full justify-between items-center'>
                    <span className='font-medium text-lg'>Total</span>
                    <span className='font-medium text-lg'>$799.99</span>
                </div>

                <a href="" className='w-full py-4 bg-blue-600 text-white font-medium flex justify-center hover:bg-blue-500 hover:transition duration-300'>Proceed to Checkout</a>

            </div>

        </div>
    </section>
  )
}

export default Cart

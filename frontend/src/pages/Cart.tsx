import React, { useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart:React.FC = () => {

    const [quantity, setQuantity] = useState<number>(0)


    const aumentQuantity = () => {
        setQuantity(quantity + 1)
    }

    const restQuantity = () => {
        setQuantity(quantity - 1)
    }


  return (  
    <section className='flex flex-col p-10 gap-5 border-b border-b-slate-100'>
        <span className='text-2xl'>Your shopping cart</span>

        <div className='w-full flex justify-between gap-14'>
            <table className='w-full border-collapse h-fit'>
                <thead>
                    <tr>
                        <th className='text-start w-1/4 text-sm text-slate-500 font-medium py-2'>PRODUCT</th>
                        <th className='text-center w-1/4 text-sm text-slate-500 font-medium py-2'>QUANTITY</th>
                        <th className='text-center w-1/4 text-sm text-slate-500 font-medium py-2'>TOTAL</th>
                        <th className='text-center w-1/4 text-sm text-slate-500 font-medium py-2'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-b-slate-200 h-fit'>
                        <td className='flex gap-3 items-center w-1/4 py-2'>
                            <div className='min-w-16 min-h-24 overflow-hidden bg-slate-300'>
                                <img src="https://images.pexels.com/photos/30142112/pexels-photo-30142112.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className='w-full h-full object-cover'/>
                            </div>


                            <div className='flex flex-col'>
                                <span className='text-lg font-medium'>Alexa</span>
                                <span className='text-slate-500 font-light'>$799.99</span>
                            </div>
                        </td>
                        <td className='w-1/4'>
                            <div className='flex gap-2 items-center justify-center'>
                                <button className=' h-fit w-fit p-2 border border-slate-200 rounded hover:bg-blue-300 hover:border-blue-300 hover:transition hover:cursor-pointer duration-300' onClick={restQuantity}><Minus className='w-4 h-4'/></button>
                                <input type="number" name="" value={quantity} className='w-14 h-fit border border-slate-200 rounded px-2 py-1 text-center focus:outline-0 focus:border-blue-300' min={0}/>
                                <button className=' h-fit w-fit p-2 border border-slate-200 rounded hover:bg-blue-300 hover:border-blue-300 hover:transition hover:cursor-pointer duration-300' onClick={aumentQuantity}><Plus className='w-4 h-4'/></button>
                            </div>
                        </td>
                        <td className='w-1/4 text-center'>
                            <span className='font-light'>$799.99</span>
                        </td>
                        <td className='w-1/4 text-center'>
                            <button className='w-fit h-fit p-2 rounded hover:bg-red-200 hover:cursor-pointer hover:transition duration-300'><Trash2 className='w-5 h-5 text-red-600'/></button>
                        </td>   
                    </tr>
                </tbody>
            </table>

            <div className='flex flex-col min-w-80 p-5 bg-blue-50 rounded-lg gap-3 shadow-lg h-fit'>
                <span className='text-xl font-medium'>Order Summary</span>

                <div className='flex flex-col border-b border-slate-300 gap-1 pb-5'>
                    <div className='flex w-full justify-between'>
                        <span>Subtotal</span>
                        <span>$799.00</span>
                    </div>

                    <div className='flex w-full justify-between'>
                        <span>Shipping</span>
                        <span>$00.00</span>
                    </div>
                </div>

                <div className='flex w-full justify-between'>
                    <span className='font-medium text-lg'>Total</span>
                    <span className='font-medium text-lg'>$799.99</span>
                </div>
                
                <a href="/cart" className='w-full bg-blue-500 py-2 px-5 text-center rounded text-white hover:brightness-95 hover:transition duration-300'>Proceed to Checkout</a>
            </div>

        </div>
    </section>
  )
}

export default Cart

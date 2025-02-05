import React from 'react'
import { MapPin, CreditCard, Truck, CircleCheckBig } from 'lucide-react';

const Review:React.FC = () => {
  return (
    <section className='flex flex-col items-center p-10 gap-10 bg-slate-50'>
        <div className='flex flex-col gap-14'>
            <div className='flex flex-col gap-5 items-center'>
                <span className='text-3xl'>Review your Order</span>
                <span className='text-slate-500'>Please review your order details before confirming.</span>
            </div>

            <div className='flex flex-col p-5 bg-white rounded-lg'>
                <div className='flex flex-col gap-5 border-b border-b-slate-200 pb-5'>
                    <div className='flex gap-2 items-center'>
                        <MapPin className='w-5 h-5 text-slate-400'/>
                        <span className='text-lg font-medium'>Shipping Information</span>
                    </div>

                    <div className='flex flex-col text-sm gap-3 pl-7'>
                        <div className='flex flex-col'>
                            <span className='font-medium'>David Valenzuela</span>
                            <span className='text-slate-600'>Aguamarina #155, Col, San Miguel</span>
                            <span className='text-slate-600'>Guámuchil, 81420</span>
                            <span className='text-slate-600'>México</span>

                        </div>

                        <span className='text-slate-600'>davidvalenzuela@gmail.com</span>
                    </div>
                </div>

                <div className='flex flex-col gap-5 border-b border-b-slate-200 pb-5'>
                    <div className='flex gap-2 items-center pt-5'>
                        <CreditCard className='w-5 h-5 text-slate-400'/>
                        <span className='text-lg font-medium'>Payment Method</span>
                    </div>

                    <div className='flex flex-col text-sm gap-3 pl-7'>
                        <span className='text-slate-600'>Mercado Pago</span>
                    </div>
                </div>

                <div className='flex flex-col gap-5 border-b border-b-slate-200 pb-5'>
                    <div className='flex gap-2 items-center pt-5'>
                        <Truck className='w-5 h-5 text-slate-400'/>
                        <span className='text-lg font-medium'>Delivery Method</span>
                    </div>

                    <div className='flex flex-col text-sm gap-3 pl-7'>
                        <span className='text-slate-600'>Standard Shipping (Free)</span>
                    </div>
                </div>

                <div className='p-5 gap-5 min-w-96 w-[42rem] h-fit flex flex-col'>
                    <span className='font-medium text-lg'>Order Summary</span>

                    <div className='flex flex-col gap-1 border-b pb-5 border-b-slate-200'>
                        <div className='flex gap-2 items-center'>
                            <div className='min-w-20 min-h-20 max-h-20 max-w-20 overflow-hidden rounded bg-slate-500'>
                                <img src="" alt="" className='w-full h-full'/>
                            </div>

                            <div className='w-full flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-sm font-medium'>Leather Crossbody Bag</span>
                                    <span className='text-sm text-slate-500'>Qty 1</span>
                                </div>

                                <span className='text-sm font-medium'>$799.99</span>

                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-4 pb-5 border-b border-b-slate-200'>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-sm text-slate-500'>Subtotal</span>
                            <span className='text-sm'>$799.99</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-sm text-slate-500'>Shipping</span>
                            <span className='text-sm'>Free</span>
                        </div>

                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <span className='font-medium text-lg'>Total</span>
                        <span className='font-medium text-lg'>$799.99</span>
                    </div>
                </div>
            </div>


        </div>

        <div className='flex flex-col gap-5'>
            <a href="/payment-accepted" className='gap-2 min-w-96 w-[44rem] py-4 bg-blue-600 text-white font-medium flex justify-center items-center hover:bg-blue-500 hover:transition duration-300'><CircleCheckBig className='w-5 h-5 '/> Confirm Order</a>
            <a href="" className='gap-2 min-w-96 w-[44rem] py-4 bg-white border border-slate-300 font-medium flex justify-center items-center hover:brightness-95 hover:transition duration-300'>Edit Order</a>

        </div>
        
      
    </section>
  )
}

export default Review

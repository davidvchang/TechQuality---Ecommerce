import React, { useState } from 'react'
import { CreditCard } from 'lucide-react';

const Checkout:React.FC = () => {

    const [methodPayment, setMethodPayment] = useState<string>("")

  return (
    <section className='flex flex-col p-10 gap-5 bg-slate-50'>
        <span className='text-2xl'>Checkout</span>

        <div className='flex w-full justify-between gap-10'>

            {/* SHIPPING INFORMATION CONTAINER */}
            <div className='p-5 bg-white rounded-lg border w-full h-fit border-slate-100 flex flex-col gap-5'>
                <div className='flex flex-col gap-5'>
                    <span className='font-medium text-xl'>Contact Information</span>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Email</span>
                            <input type="email" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Phone Number</span>
                            <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                        </div>

                    </div>


                </div>

                <div className='flex flex-col gap-5'>
                    <span className='font-medium text-xl'>Shipping Information</span>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Full name</span>
                            <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Address</span>
                            <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                        </div>

                        <div className='flex gap-5'>
                            <div className='flex flex-col gap-1 w-full'>
                                <span className='text-sm font-medium'>City</span>
                                <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                            </div>

                            <div className='flex flex-col gap-1 w-full'>
                                <span className='text-sm font-medium'>Country</span>
                                <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='text-sm font-medium'>Postal Code</span>
                            <input type="text" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                        </div>

                    </div>


                </div>

                <div className='flex flex-col gap-5'>
                    <span className='font-medium text-xl'>Payment Method</span>

                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2'>
                            <input type="radio" id='card' name='payment-method' onChange={() => setMethodPayment("card")}/>
                            <label htmlFor="card" className='text-sm'>Credit/Debit Card</label>
                        </div>

                        <div className='flex gap-2'>
                            <input type="radio" id='mercado_pago' name='payment-method' onChange={() => setMethodPayment("mercado_pago")}/>
                            <label htmlFor="mercado_pago" className='text-sm'>Mercado Pago</label>
                        </div>
                    </div>

                    {methodPayment === "card" && (
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-2 items-center bg-gray-100 px-5 py-4 rounded-lg text-slate-500 text-sm'>
                                <CreditCard className='w-5 h-5'/>
                                <span>All transactions are secure and encrypted</span>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-sm font-medium'>Card Number</span>
                                    <input type="number" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200'/>
                                </div>

                                <div className='flex gap-5'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-sm font-medium'>Expire Date</span>
                                        <input type="number" required placeholder='MM/YY' className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200 placeholder:text-sm'/>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <span className='text-sm font-medium'>CVV</span>
                                        <input type="number" required className='px-5 py-2 text-sm border border-slate-200 rounded focus:outline-0 focus:border-blue-500 focus:transition duration-200 placeholder:text-sm'/>
                                    </div>

                                </div>
                            </div>
                        </div>

                    )}
                    



                    <a href="/order-review" className='w-full py-4 bg-blue-600 text-white font-medium flex justify-center hover:bg-blue-500 hover:transition duration-300'>Review Order</a>


                </div>

            </div>

            {/* ORDER SUMMARY */}
            <div className='p-5 gap-5 min-w-96 w-[48rem] h-fit flex flex-col bg-white rounded-lg border border-slate-100'>
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
      
    </section>
  )
}

export default Checkout

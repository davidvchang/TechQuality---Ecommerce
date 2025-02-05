import React from 'react'
import { CircleCheckBig } from 'lucide-react';

const PaymentAccepted:React.FC = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center bg-slate-50 gap-10' style={{height: "calc(100vh - 64px)"}}>
        <div className='flex flex-col gap-5 items-center'>
            <CircleCheckBig className='w-24 h-24 text-green-500'/>
            <span className='text-5xl font-semibold'>Thank you for your order!</span>
            <span className='text-slate-500 text-lg'>Your order has been confirmed successfully.</span>

        </div>
        <a href="/products" className='w-fit h-fit px-10 py-3 bg-[#5046E5] text-white rounded hover:brightness-95 hover:transition duration-300'>Continue Shopping</a>
      
    </section>
  )
}

export default PaymentAccepted

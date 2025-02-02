import React from 'react'

const Subscribe:React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <span className='text-white text-3xl font-light'>Subscribe to receive offers</span>
        <p className='text-slate-200 font-light'>Subscribe to be the first to receive offers and promotions, just enter your email and press the subscribe button.</p>
    
        <div className='flex gap-5'>
            <input type="email" placeholder='Enter your email' className='px-5 py-3 w-72 border text-white border-gray-500 bg-[#29303D] placeholder:text-[#9CA3AF] focus:outline-0 focus:border-white focus:transition duration-300'/>
            <button className='w-fit bg-white px-10 py-3 hover:brightness-95 hover:cursor-pointer hover:transition duration-300'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe

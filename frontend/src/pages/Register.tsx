import axios from 'axios'
import React from 'react'

const Register:React.FC = () => {

    const URL_USERS: string = import.meta.env.VITE_URL_USERS

    const handleRegisterUser = async () => {
        const res = axios.post(`${URL_USERS}/`)
    }

  return (
    <section className='w-full bg-slate-50 p-10 flex flex-col items-center justify-center' style={{height: "calc(100vh - 64px)"}}>

        <form className='bg-white border border-slate-200 p-10 rounded-lg shadow flex flex-col gap-5'>
            <span className='text-2xl text-center'>Register</span>

            <div className='flex gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-sm'>Name</label>
                    <input type="text"  placeholder='Name' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="lastName" className='text-sm'>Last name</label>
                    <input type="text"  placeholder='Last name' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
                </div>    
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-sm'>Email</label>
                <input type="email"  placeholder='Email address' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="password" placeholder='Password' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Confirm Password</label>
                <input type="password"  placeholder='Confirm Password' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            <button type="submit" className='bg-[#2B7FFF] text-white py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>Register</button>
        </form>
      
    </section>
  )
}

export default Register

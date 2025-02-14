import React from 'react'

const Login:React.FC = () => {
  return (
    <section className='w-full bg-slate-50 p-10 flex flex-col items-center justify-center' style={{height: "calc(100vh - 64px)"}}>

        <form className='bg-white border border-slate-200 p-10 rounded-lg shadow flex flex-col gap-5 w-80'>
        <span className='text-2xl text-center'>Login</span>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email"  placeholder='Email address' className='px-5 p-2 border border-slate-300 rounded-sm font-light text-sm'/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Password</label>
                <input type="password"  placeholder='Password' className='px-5 p-2 border border-slate-300 rounded-sm font-light text-sm'/>
            </div>

            <button type="submit" className='bg-[#2B7FFF] text-white py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>Sign in</button>

            <a href='/register' className='text-sm font-light text-sky-600 text-center hover:text-sky-700 hover:transition duration-300'>Don't have an account? register</a>
        </form>
      
    </section>
  )
}

export default Login

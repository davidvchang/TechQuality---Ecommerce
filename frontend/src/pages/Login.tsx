import axios from 'axios';
import React, { useState } from 'react'

const Login:React.FC = () => {

  const URL_USERS: string = import.meta.env.VITE_URL_USERS

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL_USERS}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      window.location.href = "/";
    } catch {
      setErrorMessage(true);
    }
  };
  return (
    <section className='w-full bg-slate-50 p-10 flex flex-col items-center justify-center' style={{height: "calc(100vh - 64px)"}}>

        <form className='bg-white border border-slate-200 p-10 rounded-lg shadow flex flex-col gap-5 w-80' onSubmit={handleLogin}>
        <span className='text-2xl text-center'>Login</span>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-sm'>Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email address' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            {errorMessage && (
              <span className='bg-red-500 tex-white'>Credentials invalid</span>
            )}

            <button type="submit" className='bg-[#2B7FFF] text-white py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>Sign in</button>

            <a href='/register' className='text-sm font-light text-sky-600 text-center hover:text-sky-700 hover:transition duration-300'>Don't have an account? register</a>
        </form>
      
    </section>
  )
}

export default Login

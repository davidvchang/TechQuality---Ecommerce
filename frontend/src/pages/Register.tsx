import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

interface PropsDataUsers {
    id_user: number | null,
    name: string,
    last_name: string,
    email: string,
    password: string,
    password2: string,
}

const Register:React.FC = () => {

    const URL_USERS: string = import.meta.env.VITE_URL_USERS

    const navigate = useNavigate();

    const initialValues = {
        id_user: null,
        name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    }

    const [dataUser, setDataUser] = useState<PropsDataUsers>(initialValues)
    const [messageExistEmail, setMessageExistEmail] = useState<boolean>(false)
    const [samePasswords, setSamePasswords] = useState<boolean>(false)

    const existEmail = async () => {
        const res = await axios.get(URL_USERS + "/")
        const exist = res.data.find((i: PropsDataUsers) => i.email === dataUser.email)
        if(exist) {
            return true
        }
    }

    const verifyPassword = () => {
        if(dataUser.password2 !== dataUser.password){
            return true
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    };


    const handleRegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMessageExistEmail(false)
        setSamePasswords(false)

        const emailExists = await existEmail();

        const diferentPasswords = verifyPassword();

        if(emailExists) {
            setMessageExistEmail(true)
            return;
        }

        if(diferentPasswords){
            setSamePasswords(true)
            return;
        }

        const res = await axios.post(`${URL_USERS}/`, dataUser)
        if(res.status === 201) {
            Swal.fire({
                title: "Registered",
                text: "User has been registered correctly",
                icon: 'success',
                confirmButtonText: "OK"
            }).then(() => {
                setDataUser(initialValues)
                navigate("/login")
            })
        }
        else {
            Swal.fire({
                title: "Error",
                text: "An error has ocurred",
                icon: 'error',
                confirmButtonText: "OK"
            }).then(() => {
                setDataUser(initialValues)
            })
        }
    }
    

  return (
    <section className='w-full bg-slate-50 p-10 flex flex-col items-center justify-center' style={{height: "calc(100vh - 64px)"}}>

        <form className='bg-white border border-slate-200 p-10 rounded-lg shadow flex flex-col gap-5' onSubmit={handleRegisterUser}>
            <span className='text-2xl text-center'>Register</span>

            <div className='flex gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-sm'>Name</label>
                    <input type="text" value={dataUser.name} onChange={handleChange} name='name' placeholder='Name' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="last_name" className='text-sm'>Last name</label>
                    <input type="text" value={dataUser.last_name} onChange={handleChange} name='last_name' placeholder='Last name' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
                </div>    
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-sm'>Email</label>
                <input type="email" value={dataUser.email} onChange={handleChange} name='email' placeholder='Email address' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
                {messageExistEmail && (
                    <span className='text-white text-sm px-5 py-1 bg-red-500 text-center rounded'>Email already exists</span>
                )}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="password" value={dataUser.password} onChange={handleChange} name='password' placeholder='Password' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="password2" className='text-sm'>Confirm Password</label>
                <input type="password"  value={dataUser.password2} onChange={handleChange} name='password2' placeholder='Confirm Password' className='px-3 p-2 border border-slate-300 rounded-sm font-light text-sm' required/>
            </div>
            {samePasswords && (
                    <span className='text-white text-sm px-5 py-1 bg-red-500 text-center rounded'>Passwords do not match</span>
            )}

            <button type="submit" className='bg-[#2B7FFF] text-white py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>Register</button>
        </form>
      
    </section>
  )
}

export default Register

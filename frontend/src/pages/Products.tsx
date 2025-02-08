import React from 'react'
import InputSearch from '../components/InputSearch'

const Products:React.FC = () => {
  return (
    <section className='w-full h-full'>
        <div className='w-full h-64 bg-slate-900 flex flex-col justify-center pl-20 gap-4'>
            <span className='text-white text-4xl font-light'>Products Collection</span>
            <span className='text-slate-300'>Discover our wide variety of high quality products.</span>
        </div>

        <div className='pt-10 px-20'>
            <InputSearch/>

        </div>

      
    </section>
  )
}

export default Products

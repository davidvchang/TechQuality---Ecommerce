import React from 'react'
import InputSearch from '../components/InputSearch'
import InputCategory from '../components/InputCategory'

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

        <div className='pt-8 px-20 flex flex-col gap-4'>
            <span className='text-lg font-medium'>Categories</span>

            <div className='flex flex-col gap-3'>
                <InputCategory id_name='Hola' name='All'/>
                <InputCategory id_name='asd' name='Bags'/>
                <InputCategory id_name='dsa' name='Hola'/>
            </div>
        </div>

      
    </section>
  )
}

export default Products

import React from 'react'
import { Heart, ShoppingCart } from 'lucide-react';

interface PropsProductsHome {
    image: string,
    name_product: string,
    type: string,
    price: string,
    link: string
}

const ProductHome:React.FC<PropsProductsHome> = ({ image, name_product, type, price, link}) => {
  return (
    <div className='flex-1 flex-col'>
        <div className='min-w-72 w-72 h-72 relative overflow-hidden'>
            <a href={link}>
                <img src={image} alt="" className='w-full h-full object-cover brightness-90 hover:scale-105 hover:transition duration-300 hover:cursor-pointer'/>
            </a>

            <div className='absolute top-3 right-3 flex flex-col gap-2'>
                <button className='p-2 bg-white rounded-full shadow-2xl opacity-95 hover:brightness-95 hover:transition hover:cursor-pointer duration-300'>
                    <Heart className='w-5 h-5'/>
                </button>

                <button className=' p-2 bg-white rounded-full shadow-2xl opacity-95 hover:brightness-95 hover:transition hover:cursor-pointer duration-300'>
                    <ShoppingCart className='w-5 h-5'/>
                </button>

            </div>

        </div>
    
        <div className='flex flex-col gap-1 pt-5'>
            <span className='text-xl'>{name_product}</span>
            <span className='text-sm font-light text-slate-500'>{type}</span>
            <span className='text-lg font-medium'>${price}</span>
        </div>
    </div>
  )
}

export default ProductHome

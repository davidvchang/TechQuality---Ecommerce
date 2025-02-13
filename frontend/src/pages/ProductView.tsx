import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react';
import ImagesProductContainer from '../components/ImagesProductContainer';
import axios from 'axios';

interface PropsDataProduct {
    id_product: number,
    name: string,
    description: string,
    price: string,
    category: string
}

const ProductView:React.FC = () => {
    const [products, setProducts] = useState<PropsDataProduct[]>([])

    const getProducts= async() => {
        const response = await axios.get("http://localhost:4000/api/products")
        setProducts(response.data)
    }
  return (
    <section className='w-full h-full bg-slate-50 pb-14 p-10 flex'>
        <div className='flex flex-col gap-5'>
            <a href="/products" className='flex gap-2 items-center hover:text-slate-600 hover:transition duration-300'>
                <ArrowLeft className='w-[22px] h-[22px]'/>
                <span>Back to products</span>
            </a>

                {/* PRINCIPAL IMAGE */}
            <div className='w-[32rem] h-[32rem] bg-amber-100 border rounded-lg'>

            </div>

            <div className='flex gap-5 pl-0.5'>
                <ImagesProductContainer/>
                <ImagesProductContainer/>
                <ImagesProductContainer/>
                <ImagesProductContainer/>
            </div>

        </div>

        <div className='flex flex-col gap-5'>
            

        </div>
    </section>
  )
}

export default ProductView

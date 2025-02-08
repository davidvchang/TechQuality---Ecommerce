import React, { useEffect, useState } from 'react'
import InputSearch from '../components/InputSearch'
import InputCategory from '../components/InputCategory'
import axios from 'axios'

interface PropsDataCategories {
    id_product: number,
    name: string,
    description: string,
    price: string,
    category: string
}

const Products:React.FC = () => {

    const [categories, setCategories] = useState<PropsDataCategories[]>([])

    const getCategories= async() => {
        const response = await axios.get("http://localhost:4000/api/products")
        setCategories(response.data)
    }

    useEffect(() => {
        getCategories()
    })

    const uniqueCategories = categories.filter((item, index, self) =>
        index === self.findIndex(c => c.category === item.category)
    );

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
                {uniqueCategories.map((c) => (
                    <InputCategory id_name={c.name} key={c.id_product} name={c.category}/>
                ))}
            </div>
        </div>

      
    </section>
  )
}

export default Products

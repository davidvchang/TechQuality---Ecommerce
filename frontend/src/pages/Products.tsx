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
    <section className='w-full h-full bg-slate-50 pb-14'>
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
                    <InputCategory name_input='categories' id_name={c.name} key={c.id_product} name={c.category}/>
                ))}
            </div>
        </div>

        <div className='pt-8 px-20 flex flex-col gap-4'>
            <span className='text-lg font-medium'>Price Range</span>

            <div className='flex flex-col gap-3'>
                    <InputCategory name_input='prices' id_name="all" name="All"/>
                    <InputCategory name_input='prices' id_name="under_200" name="Under $200"/>
                    <InputCategory name_input='prices' id_name="200_500" name="$200 - $500"/>
                    <InputCategory name_input='prices' id_name="500_1000" name="$500 - $1000"/>
                    <InputCategory name_input='prices' id_name="over_1000" name="Over $1000"/>

                    <div className='flex flex-col pt-3'>
                        <div className='flex gap-16'>
                            <span className='text-sm'>Min</span>
                            <span className='text-sm'>Max</span>
                        </div>

                        <div className='flex gap-2'>
                            <input type="number" className='w-16 border border-slate-300 rounded pl-3 py-1 text-sm' min={0}/>
                            <span className='text-xl font-semibold'>-</span>
                            <input type="number" className='w-16 border border-slate-300 rounded pl-3 py-1 text-sm' min={0}/>
                        </div>
                    </div>
            </div>
        </div>

        <div className='pt-8 px-20 flex flex-col gap-4'>
            <span className='text-lg font-medium'>Sort by</span>

            <div className='flex flex-col gap-3'>
                <select name="sort" className='w-fit px-2 py-2 text-sm font-light border border-slate-300 rounded'>
                    <option value="newest" selected>Newest</option>
                    <option value="low_to_high">Price: Low to High</option>
                    <option value="high_to_low">Price: High to Low</option>
                </select>
            </div>
        </div>

      
    </section>
  )
}

export default Products

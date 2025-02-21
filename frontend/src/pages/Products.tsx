import React, { useEffect, useState } from 'react'
import InputSearch from '../components/InputSearch'
import InputCategory from '../components/InputCategory'
import axios from 'axios'
import Swal from 'sweetalert2'
import ProductHome from '../components/Product'
import AlexaImg from '../assets/img/Alexa.webp'
import { Search } from 'lucide-react';

interface PropsDataCategories {
    id_product: number,
    name: string,
    description: string,
    price: string,
    category: string
}

const Products:React.FC = () => {

    const URL_PRODUCTS = import.meta.env.VITE_URL_PRODUCTS
    const URL_ADD_TO_CART = import.meta.env.VITE_URL_ADD_TO_CART

    const [products, setProducts] = useState<PropsDataCategories[]>([])
    const [categories, setCategories] = useState<PropsDataCategories[]>([])
    const [numberProducts, setNumberProducts] = useState<number>(0)
    const [filteredProducts, setFilteredProducts] = useState<PropsDataCategories[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [numberProductsCategory, setNumberProductsCategory] = useState<number>(0)
    const [minPrice, setMinPrice] = useState<string>("")
    const [maxPrice, setMaxPrice] = useState<string>("")
    const [searchProductInput, setSearchProductInput] = useState<string>("")

    const getProducts= async() => {
        const response = await axios.get(URL_PRODUCTS)
        setCategories(response.data)
        setNumberProducts(response.data.length)
        setProducts(response.data)
        setFilteredProducts(response.data)
    }

    const handleCategorySelected = (category: string) => {
        setSelectedCategory(category);
        if (category === "all") {
            setFilteredProducts(products);
            setNumberProductsCategory(numberProducts)
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
            setNumberProductsCategory(filtered.length)
        }
    }

    const handleRangePrice = (id_name: string) => {

        if(id_name === "all_prices") {
            setFilteredProducts(products);
        }
        else if(id_name === "under_200") {
            const filtered = products.filter((product) => Number(product.price) < 200)
            setFilteredProducts(filtered);
        }
        else if(id_name === "200_500") {
            const filtered = products.filter((product) => Number(product.price) >= 200 && Number(product.price) < 500)
            setFilteredProducts(filtered);
        }

        else if(id_name === "500_1000") {
            const filtered = products.filter((product) => Number(product.price) >= 500 && Number(product.price) <= 1000)
            setFilteredProducts(filtered);
        }
        else if(id_name === "overr_1000"){
            const filtered = products.filter((product) => Number(product.price) > 1000)
            setFilteredProducts(filtered);
        }
    }

    const handlePricesInputs = () => {
        if(minPrice !== "" && maxPrice !== "" && Number(minPrice) < Number(maxPrice)) {
            const filtered = products.filter((product) => Number(product.price) >= Number(minPrice) && Number(product.price) <= Number(maxPrice))
            setFilteredProducts(filtered);
        }
    }

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase()
        setSearchProductInput(value)

        const filtered = products.filter((product) => product.name.toLowerCase().includes(value) )
        setFilteredProducts(filtered);
    }

    const handleAddToCart = async (id_product: number, quantity: number) => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                title: "Error",
                text: "You must login first",
                icon: 'error',
                confirmButtonText: "OK"
            })
            return;
        }

        await axios.post(
            URL_ADD_TO_CART, 
            { product_id: id_product, quantity },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        Swal.fire({
            title: "Product Added",
            text: "The product has been added correctly",
            icon: 'success',
            confirmButtonText: "OK"
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    const uniqueCategories = categories.filter((item, index, self) =>
        index === self.findIndex(c => c.category === item.category)
    );

  return (
    <section className='w-full h-full bg-slate-50 pb-14'>
        <div className='w-full h-64 bg-slate-900 flex flex-col justify-center pl-20 gap-4'>
            <span className='text-white text-4xl font-light'>Products Collection</span>
            <span className='text-slate-300'>Discover our wide variety of high quality products.</span>
        </div>

        <div className='w-full flex justify-between'>
            <div className='pt-10 px-20'>
                <InputSearch onChange={handleSearchInput}/>
            </div>

            <div className='flex flex-col gap-3 pt-10 px-16'>
                <select name="sort" className='w-fit px-2 py-2 text-sm font-light border border-slate-500 rounded'>
                    <option value="newest" selected>Newest</option>
                    <option value="low_to_high">Price: Low to High</option>
                    <option value="high_to_low">Price: High to Low</option>
                </select>
            </div>

        </div>


        <div className='flex gap-20'>
            <div className='flex flex-col'>
                <div className='pt-8 px-20 flex flex-col gap-4'>
                    <span className='text-lg font-medium'>Categories</span>

                    <div className='flex flex-col gap-3'>
                        <InputCategory name_input='categories' name='All' id_name='all' onChange={() => handleCategorySelected("all")}/>
                        
                        {uniqueCategories.map((c) => (
                            <InputCategory name_input='categories' id_name={c.name} key={c.id_product} name={c.category} onChange={() => handleCategorySelected(c.category)}/>
                        ))}
                    </div>
                </div>

                <div className='pt-8 px-20 flex flex-col gap-4'>
                    <span className='text-lg font-medium'>Price Range</span>

                    <div className='flex flex-col gap-3'>
                            <InputCategory name_input='prices' id_name="all_prices" name="All" onChange={() => handleRangePrice("all_prices")}/>
                            <InputCategory name_input='prices' id_name="under_200" name="Under $200" onChange={() => handleRangePrice("under_200")}/>
                            <InputCategory name_input='prices' id_name="200_500" name="$200 - $500" onChange={() => handleRangePrice("200_500")}/>
                            <InputCategory name_input='prices' id_name="500_1000" name="$500 - $1000" onChange={() => handleRangePrice("500_1000")}/>
                            <InputCategory name_input='prices' id_name="overr_1000" name="Over $1000" onChange={() => handleRangePrice("overr_1000")}/>

                            <div className='flex flex-col pt-3'>
                                <div className='flex gap-16'>
                                    <span className='text-sm'>Min</span>
                                    <span className='text-sm'>Max</span>
                                </div>

                                <div className='flex gap-2'>
                                    <input type="number" className='w-16 border border-slate-300 rounded pl-3 py-1 text-sm' min={0} onChange={(e) => setMinPrice(e.target.value)}/>
                                    <span className='text-xl font-semibold'>-</span>
                                    <input type="number" className='w-16 border border-slate-300 rounded pl-3 py-1 text-sm' min={0} onChange={(e) => setMaxPrice(e.target.value)}/>
                                    <button className='border border-slate-300 rounded p-2 cursor-pointer hover:bg-slate-100 hover:transition duration-300' onClick={handlePricesInputs}> <Search className='w-4 h-4'/></button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* PRODUCTS CONTAINER */}
            <div className='flex flex-col pt-8 gap-3 w-full'>
                <span className='tex-sm font-light'>Showing {filteredProducts.length} products</span>

                <div className='grid grid-cols-3 w-full gap-x-0 gap-y-10'>
                    {filteredProducts.length === 0 && (
                        <div className='flex pt-10  '>
                            <span className='text-3xl text-center font-light'>Products not found</span>
                        </div>
                    )}

                    {filteredProducts.map((product) => (
                        <ProductHome key={product.id_product} link={`/product/${product.id_product}`} image={AlexaImg} name_product={product.name} type={product.category} price={product.price} onClickCart={() => handleAddToCart(product.id_product, 1)}/>
                    ))}
                </div>
            </div>

        </div>
      
    </section>
  )
}

export default Products

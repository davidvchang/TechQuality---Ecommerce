import React, { useEffect, useState } from 'react'
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';
import ImagesProductContainer from '../components/ImagesProductContainer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

interface PropsDataProduct {
    id_product: number,
    name: string,
    description: string,
    price: string,
    category: string
}

const ProductView:React.FC = () => {

    const URL_ADD_TO_CART = import.meta.env.VITE_URL_ADD_TO_CART
    const URL_PRODUCTS = import.meta.env.VITE_URL_PRODUCTS

    const { id_product } = useParams();

    const [products, setProducts] = useState<PropsDataProduct[]>([])
    const [counterQuantity, setCounterQuantity] = useState<number>(1)

    const getProduct= async() => {
        const response = await axios.get(`${URL_PRODUCTS}/${id_product}`)
        setProducts(response.data)
    }

    const decreaseQuantity = () => {
        if(counterQuantity > 1) {
            setCounterQuantity(counterQuantity - 1)
        }
    }

    const addToCart = async (id_product: number, quantity: number) => {
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
      getProduct()
    }, [])
    
  return (
    <section className='w-full h-full bg-slate-50 pb-14 p-10 flex flex-col gap-5'>
        <a href="/products" className='flex gap-2 items-center hover:text-slate-600 hover:transition duration-300'>
            <ArrowLeft className='w-[22px] h-[22px]'/>
            <span>Back to products</span>
        </a>

        <div className='flex gap-20'>
            <div className='flex flex-col gap-5'>

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

            {products.map((product) => (
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-3xl font-light'>{product.name}</span>
                        <span className='text-slate-500 text-lg'>{product.category}</span>
                    </div>

                    <span className=' text-2xl font-medium'>${product.price}</span>

                    <div className='flex flex-col gap-3'>
                        <span className='font-medium'>Quantity</span>

                        <div className='flex gap-5 items-center'>
                            <button className='text-4xl border border-slate-300 p-2 rounded-full hover:bg-slate-100 hover:transition duration-300 cursor-pointer' onClick={decreaseQuantity}><Minus className='w-[18px] h-[18px]'/></button>
                            <span>{counterQuantity}</span>
                            <button className='text-4xl border border-slate-300 p-2 rounded-full hover:bg-slate-100 hover:transition duration-300 cursor-pointer' onClick={() => setCounterQuantity(counterQuantity + 1)}><Plus className='w-[18px] h-[18px]'/></button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-14 pt-5'>
                        <div className='flex gap-5'>
                            <button className='bg-[#101827] text-white flex py-3 px-48 gap-3 items-center hover:bg-slate-800 cursor-pointer hover:transition duration-300' onClick={() => addToCart(product.id_product, counterQuantity)}>
                                <ShoppingCart className='w-5 h-5'/>
                                <span className='font-normal'>Add to Cart</span>
                            </button>

                            <button className='border border-slate-300 p-3 rounded-full w-fit h-fit hover:bg-slate-100 hover:transition duration-300 cursor-pointer'>
                                <Heart className='w-5 h-5'/>
                            </button>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='font-medium'>Description</span>

                            <div className='flex items-center w-[36rem]'>
                                <p className='font-light'>{product.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default ProductView

import React, { useEffect, useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react';
import axios from 'axios';
import Products from './Products';

interface PropsDataCart {
    id_cart_items: number,
    user_id: number,
    product_id: number,
    quantity: number
}

interface PropsDataProducts {
    id_product: number,
    name: string,
    description: string,
    price: string,
    category: string,
    stock: number,
    quantity: number;
}

interface PropsDataProductWithQuantity extends PropsDataProducts {
    quantity: number;
}

const Cart:React.FC = () => {

    const URL_GET_PRODUCTS_IN_CART = import.meta.env.VITE_URL_GET_CART_ITEMS
    const URL_GET_PRODUCTS = import.meta.env.VITE_URL_PRODUCTS
    const [dataProductsUser, setDataProductsUser] = useState<PropsDataProducts[]>([])

    const restQuantity = (productId: number) => {
        setDataProductsUser((prevProducts) => 
            prevProducts.map((product) => 
                product.id_product === productId 
                    ? { ...product, quantity: Math.max(1, product.quantity - 1)}
                    : product
            )
        );
    };

    const sumQuantity = (productId: number) => {
        setDataProductsUser((prevProducts) => 
            prevProducts.map((product) => 
                product.id_product === productId 
                    ? { ...product, quantity: (product.quantity + 1)}
                    : product
            )
        );
    };

    const token = localStorage.getItem('token');

    const getProducts = async () => {
        const [response1, response2] = await Promise.all([
            axios.get(`${URL_GET_PRODUCTS}/`),
            axios.get(`${URL_GET_PRODUCTS_IN_CART}/`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        ]);

        const allProducts:Array<PropsDataProducts> = response1.data;
        const cartItems:Array<PropsDataCart> = response2.data;

        //SAVE JUST PRODUCTS FROM USER AUTHENTICATED
        const productsUser: PropsDataProductWithQuantity[] = allProducts.filter(product => 
            {
                const cartItem = cartItems.find(item => item.product_id === product.id_product)
                if(cartItem) {
                    product.quantity = cartItem.quantity;
                    return true;
                }
                return false
            })
        
        setDataProductsUser(productsUser)
    }

    useEffect(() => {
        getProducts()
    }, [])
    

  return (  
    <section className='flex flex-col p-10 gap-5 bg-slate-50'>
        <span className='text-2xl'>Your Shopping Cart</span>

        <div className='w-full flex justify-between gap-10'>

            {/* CONTAINER PRODUCTS IN CART */}
            <div className='w-full flex flex-col justify-between gap-1'>

                {/* CONTAINER PRODUCT */}
                {dataProductsUser.map((product) => (

                    <div className='flex justify-between bg-white p-5 rounded-lg border w-full h-fit border-slate-100' key={product.id_product}>

                        <div className='flex items-center gap-5'>
                            <div className='bg-red-400 min-w-24 min-h-24 max-h-24 overflow-hidden rounded'>
                                <img src="" alt="" className='w-full h-full'/>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-medium text-lg'>{product.name}</span>
                                    <span className='text-sm text-gray-500 font-normal'>{product.category}</span>
                                    <span className='text-sm text-gray-500 font-normal'>Unit price: ${product.price}</span>
                                </div>

                                <div className='flex border w-fit border-slate-200 rounded gap-2 px-1 items-center'>
                                    <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300' onClick={() => restQuantity(product.id_product)}><Minus className='w-4 h-4'/></button>
                                    <span className='py-2 px-1'>{product.quantity}</span>
                                    <button className='w-fit h-fit p-2 hover:bg-slate-50 cursor-pointer hover:transition duration-300' onClick={() => sumQuantity(product.id_product)}><Plus className='w-4 h-4'/></button>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col items-end min-h-full justify-between'>
                            <span>${Number(product.price) * product.quantity}</span>
                            <button className='w-fit p-2 rounded cursor-pointer hover:text-red-500 hover:bg-red-100 hover:transition duration-300'><Trash2 className='w-5 h-5'/></button>

                        </div>

                    </div>
                ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className='p-5 gap-5 min-w-96 w-[42rem] h-fit flex flex-col bg-white rounded-lg border border-slate-100'>
                <span className='font-medium text-lg'>Order Summary</span>

                <div className='flex flex-col gap-2 pb-5 border-b border-b-slate-200'>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm text-slate-500'>Subtotal</span>
                        <span className='text-sm'>$799.99</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-sm text-slate-500'>Shipping</span>
                        <span className='text-sm'>$00.00</span>
                    </div>

                </div>

                <div className='flex w-full justify-between items-center'>
                    <span className='font-medium text-lg'>Total</span>
                    <span className='font-medium text-lg'>$799.99</span>
                </div>

                <a href="/checkout" className='w-full py-4 bg-blue-600 text-white font-medium flex justify-center hover:bg-blue-500 hover:transition duration-300'>Proceed to Checkout</a>

            </div>

        </div>
    </section>
  )
}

export default Cart

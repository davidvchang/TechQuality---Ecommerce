import React from 'react'

interface PropsCategoryHome {
    image: string,
    title_category: string,
    description_category: string
}

const CategoryHome:React.FC<PropsCategoryHome> = ({ image, title_category, description_category}) => {
  return (
    <div className='flex-1 min-w-96 h-96 overflow-hidden relative z-0'>
        
        <img src={image} alt="" className='w-full h-full object-cover brightness-90 hover:scale-105 hover:transition duration-300 hover:cursor-pointer'/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:cursor-pointer hover:scale-105 hover:transition duration-300"></div>
        

        <div className='absolute z-20 bottom-0 p-8 flex flex-col gap-1'>
            <span className='text-2xl text-white font-light'>{title_category}</span>
            <span className='text-sm text-white font-light'>{description_category}</span>
        </div>
    </div>
  )
}

export default CategoryHome

import React from 'react'

interface PropsCategories {
    name_input: string,
    id_name: string,
    name: string
}

const InputCategory:React.FC<PropsCategories> = ({ name_input, id_name, name }) => {
  return (
    <div className='flex gap-3 items-center'>
        <input type="radio" name={name_input} id={id_name} className='w-4 h-4'/>
        <label htmlFor={id_name} className='font-light text-sm'>{name}</label>
      
    </div>
  )
}

export default InputCategory

import React from 'react'

interface PropsFeature {
    icon: React.ReactNode,
    title: string,
    description: string
}

const Feature:React.FC<PropsFeature> = ({icon, title, description}) => {
  return (
    <div className='flex flex-col items-center gap-5 p-10'>
      {icon}
      <div className='flex flex-col gap-1 items-center'>
        <span className='text-lg font-medium'>{title}</span>
        <span className='font-light text-[#6B7280] text-sm'>{description}</span>
      </div>
    </div>
  )
}

export default Feature

import React from 'react'

interface PropsNav {
    link: string,
    text: string
}

const Nav:React.FC<PropsNav> = ({link, text}) => {
  return (
    <a href={link} className='hover:text-blue-500 hover:transition duration-300'>{text}</a>
  )
}

export default Nav

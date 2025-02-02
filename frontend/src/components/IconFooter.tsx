import React from 'react'

interface PropsIcon {
    link: string,
    icon: React.ReactNode
}

const IconFooter:React.FC<PropsIcon> = ({link, icon}) => {
  return (
    <a href={link}>
      {icon}
    </a>
  )
}

export default IconFooter

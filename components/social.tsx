import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const socials = [
    { icons: <FaGithub />, path: ''},
    { icons: <FaLinkedin />, path: ''},
    { icons: <FaInstagram />, path: ''}
]

const Social = ({ containerStyles, iconStyles }: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => {
        return (
            <Link key={i} href={item.path} className={iconStyles}>
                {item.icons}
            </Link>
        )
      })}
    </div>
  )
}

export default Social

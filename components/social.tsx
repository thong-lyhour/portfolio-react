import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const socials = [
    { icons: <FaGithub />, path: 'https://github.com/thong-lyhour'},
    { icons: <FaLinkedin />, path: 'https://www.linkedin.com/in/lyhour-thong-8a3b63221/'},
    // { icons: <FaInstagram />, path: ''}
]

const Social = ({ containerStyles, iconStyles }: {containerStyles: string, iconStyles: string}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => {
        return (
            <Link key={i} href={item.path} className={iconStyles} target='_blank'>
                {item.icons}
            </Link>
        )
      })}
    </div>
  )
}

export default Social

'use client'

import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+855) 17 782 221',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'thonglyhour02@gmail.com',
  },
  {
    icon: <FaGithub />,
    title: 'Github',
    description: 'thong-lyhour',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'Lyhour Thong',
  },
]

const Contact = () => {
  return (
    <div>
      contact page
    </div>
  )
}

export default Contact

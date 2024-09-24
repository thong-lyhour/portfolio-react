"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const info = [
  {
    icon: <FaGithub />,
    description: "Github",
    title: "thong-lyhour",
    path: 'https://github.com/thong-lyhour',
    type: 'link'
  },
  {
    icon: <FaLinkedin />,
    description: "LinkedIn",
    title: "Lyhour Thong",
    path: 'https://www.linkedin.com/in/lyhour-thong-8a3b63221/',
    type: 'link'
  },
  {
    icon: <SiGmail />,
    description: "Gmail",
    title: "thonglyhour02@gmail.com",
    path: 'mailto:thonglyhour02@gmail.com',
    type: 'email'
  },
];

const Contact = () => {
  return (
    // <div className="container mx-auto">
    //   <div className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
    //     contact page
    //   </div>
    // </div>

    <div className="container mx-auto p-4 grid grid-cols-1 gap-6">
      {info.map((item, i) => (
        <div
          className=" bg-[#232329] py-6 px-10 rounded-xl flex items-center lg:items-start gap-1"
          key={i}
        >
          <div className="text-6xl mr-8">
            {item.icon}
          </div>
          <div>
            <a href={item.path} className="text-xl font-semibold text-accent" target={item?.type == 'link' ? '_blank' : '_self'}>
              {item.title}
            </a>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;

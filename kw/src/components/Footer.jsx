import React from 'react'
import { logo } from '../assets'
import { styles } from '../style'
import {  company, support } from '../constant'

const Footer = () => {
  return (
    <div>
    <div className='my-10 flex-col md:flex-row flex items-center justify-center border-t-2 border-[#d7d6d620] px-[100px] py-4'>
      <div className='flex flex-col sm:flex-row max-w-[900px] ss:w-[500px] items-center '>
        <img src={logo} alt="#" className='object-contain w-[126px] h-[103px]'/>
        <p className={`${styles.footerpara} text-center sm:text-start md:text-center hidden sm:flex`}>Leading digital agency with solid design and development expertise. We build readymade websites, mobile.</p>
      </div>

      <div className='h-[50px] w-[2px] bg-[#d7d6d643] rounded-full m-5 hidden md:flex'></div>

      <div className='flex gap-10 md:gap-20 mt-5 md:mt-0'> 

          <div className='flex items-start flex-col'>
            <h1>Company</h1>
            {company.map((item, index) => (
              <a key={index} href={item.url}><p className={`${styles.footerpara}`}>{item.title}</p></a>
            ))}
          </div>

          <div className='flex flex-col'>
            <h1>Support</h1>
            {support.map((item, index) => (
              <a key={index} href={item.url}><p className={`${styles.footerpara}`}>{item.title}</p></a>
            ))}
          </div>
      </div>
    </div>
      <p className={`${styles.footerpara} text-center text-[#d7d6d6]`}>Copyright © 2024 NehTek</p>
    </div>
  )
}

export default Footer
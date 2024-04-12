import React from 'react'
import { styles } from '../style'
import { dots2 } from '../assets'

const Newsletter = () => {
  return (
    <div className='flex items-center justify-center'>
            <div className='bg-[#F4F9FF] w-[270px] ss:w-[500px] md:w-fit relative rounded-[50px] md:rounded-[75px] py-4 ss:py-10 md:py-[70px] px-[40px] flex gap-0 ss:gap-2 md:gap-10 items-center md:flex-row flex-col shadow-lg '>
                <img src={dots2} alt="#" className='absolute -top-10 -right-10 -z-10' />
                <div className='absolute h-[150px] w-[200px] bg-[#FFF5DB] hidden ss:flex ss:rounded-bl-[60px] md:rounded-bl-[80px] -bottom-3 -left-4 -z-20'></div>
                <div className='text-wrap md:text-nowrap'>
                    <h1 className={`${styles.heading1} `}>Subscribe Newsletter</h1>
                    <p className={`${styles.paragraph1}`}>Get updates good news and promotion service.</p>
                </div>
            <div className='flex flex-row z-10'>
                <input type="email" placeholder='Enter email address' className='outline-none rounded-l-full p-5 w-[190px] ss:w-[240px] md:w-[350px] h-[57px] shadow-xl'/>
                <div className='bg-white rounded-r-full flex items-center '>
                    <button className='justify-center bg-black text-white py-3 px-5 mr-1 rounded-full font-poppins'>Subcribe</button>
                </div>
            </div>
            <div className='h-[215px] w-[320px] absolute right-[5px] rounded-r-[75px] rounded-l-[105px] bg-black z-1 hidden md:flex'></div>
            </div>

            
    </div>
  )
}

export default Newsletter
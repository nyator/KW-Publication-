import React from 'react'
import { styles } from '../style'
import { dots, heroimg } from '../assets'

const Hero = () => {
  return (
    <div className='py-20 my-0 md:my-5 flex justify-between md:flex-row flex-col items-center'>
        <div className=' text-center md:text-start justify-center px-10'>
            <h1 className={`${styles.heading} min-w-[200px] justify-center`}>Welcome to <br className='hidden md:block '/> KingdomWord</h1>
            <p className={`${styles.paragraph} justify-center max-w-[700px] w-100 px-10 md:px-0 pt-3`}>Your one-stop destination for all things books. We take pride in
                 providing a platform for authors and readers to connect, 
                explore, and celebrate literature in all its forms.
            </p>
            <div className='relative'>
                <button className='bg-black text-[13px] md:text-[18px] text-white shadow-xl px-7 mt-9 py-4 rounded-2xl'>
                    Order Book
                </button>
                <img className='absolute top-4 hidden md:block md:-left-[10px] -z-10' sizes='auto' src={dots} alt="#" />
            </div>
        </div>
        <img className='my-10 md:my-0' src={heroimg} alt="#" />
    </div>
  )
}

export default Hero
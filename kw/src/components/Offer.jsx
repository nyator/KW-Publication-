import React from 'react'
import { search, rectangle, dot3, ellipse, rec } from '../assets'
import { styles } from '../style'


const offers = [
     {
        icon: search,
        title:"1 Business Idea Planning",
        desc:"We present you a proposal and discuss nifty-gritty like",
     },
     {
        icon: search,
        title:"2 Business Idea",
        desc:"We present you a proposal and discuss nifty-gritty le",
     },
     {
        icon: search,
        title:"3 Business Idea",
        desc:"We present you a proposal and discuss nifty-gritty",
     },
     {
        icon: search,
        title:"4 Business Idea",
        desc:"We present you a proposal and discuss nifty-",
     },

 ]


const Offer = () => {
  return (
    <div className='my-[100px] flex flex-col md:flex-row items-center justify-evenly gap-0 ss:gap-5 relative'>

        <div className='mb-10 md:mb-0 relative'>
            <div className='w-[410px] text-center md:text-start'>
            <h1 className={`${styles.heading1}`}>Missions of the <br className='sm:hidden' /> kingdomWord.</h1>
            <p className={`${styles.paragraph1}`}>We build ready made websites,<br className='md:hidden' /> mobile applications, and elaborate <br className='md:hidden' /> online business services.</p>
            </div>
            <img src={dot3} alt="#"  className='absolute hidden md:flex left-10 -bottom-[270px]  -z-20 '/>
            <img src={rec} alt="#"  className='absolute hidden md:flex -top-10 -left-10  -z-10 '/>
        </div>'




        <div className='flex flex-col ss:flex-row gap-7'>
            
            <div className='flex flex-col gap-7'>
                {offers.map((item, index) => index < 2 && (
                <div key={index}>
                    <div className='flex flex-col w-[208px] h-[279px] bg-white rounded-3xl border-[1px] border-[#F2F2F2] p-4 items-center text-center justify-evenly'>
                    <div className='bg-[#F1F7FF] p-5 rounded-3xl'>
                        <img src={search} alt="#" className='object-contain w-[50px] h-[50px]'/>
                    </div>
                    <h1 className='text-[15px]'>{item.title}</h1>
                    <p className='text-[12px]'>{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            
            <div className='flex flex-col gap-7 mt-0 ss:-mt-20'>
                {offers.map((item, index) => index > 1 && (
                <div key={index}>
                    <div className='flex flex-col w-[208px] h-[279px] bg-white rounded-3xl border-[1px] border-[#F2F2F2] p-4 items-center text-center justify-evenly'>
                    <div className='bg-[#F1F7FF] p-5 rounded-3xl'>
                        <img src={search} alt="#" className='object-contain w-[50px] h-[50px]'/>
                    </div>
                    <h1 className='text-[15px]'>{item.title}</h1>
                    <p className='text-[12px]'>{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>

        </div>

                    
        <img src={ellipse} alt="#" className='absolute hidden md:flex -bottom-10 right-10 -z-20 object-contain' />
        
        <img src={rectangle} alt="#" className='absolute hidden md:flex right-0 -z-20  object-contain' />


    </div>

  )
}

export default Offer
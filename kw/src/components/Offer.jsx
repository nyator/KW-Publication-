import React from 'react'
import { search } from '../assets'


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
    <div className='mb-10 flex flex-row items-center justify-center'>
        {/* <div>
            <h1>What do we offer?</h1>
            <p>We build ready made websites, mobile applications, and elaborate online business services.</p>
        </div>' */}


        <div className='flex gap-7'>
            
        <div className='flex flex-col gap-7'>
            {offers.map((item, index) => index < 2 && (
            <div>
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
        
        <div className='flex flex-col gap-7 -mt-20'>
            {offers.map((item, index) => index > 1 && (
            <div>
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
    </div>

  )
}

export default Offer
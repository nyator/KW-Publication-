import React from 'react'
import { logo, menu, close } from "../assets";
import { navlinks } from '../constant';
import Nb from '../props/Nb'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'



import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex items-center justify-between '>
      
        <img src={logo} width={147} height={46} alt="KW Publications" />

        {/* desktop nav */}
        
      <div className="hidden md:block">
      <ul className='flex justify-center gap-10 lg:gap-20 text-[18px]'>
        <div className='flex justify-center gap-10 lg:gap-20'>
        <Nb />
          </div>
         <button className='hover:scale-105 transition-all ease-in-out'>
          <a href="">Get in touch</a>
         </button>
      </ul>
      </div>

      {/* mobile nav */}

      <div className='md:hidden flex justify-end items-center'>
        <div lassName={`${toggle ? 'flex' :'hidden'} p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
        <ul className='relative'>
          <li>
            <Menu as='div' >
                <Menu.Button>
                <img src={toggle ? close : menu} alt="Menu" className='w-[40px] h-40px] object-contain' onClick={()=>setToggle((prev) => !prev)} />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="absolute z-10 mt-3 w-[210px] right-0 items-start px-4 ">

                    <Menu.Item>
                    
                      <div className="overflow-hidden rounded-lg  shadow-lg">
                        <div className='relative grid gap-10 bg-white p-7 text-start '>
                      {navlinks.map((nav, index) => (
                        <a key={index} href={nav.url}><p className='hover:scale-105 transition duration-150 ease-in-out'>{nav.label}</p></a>
                      ))}
                      </div>
                      </div>
                    </Menu.Item>
                </Menu.Items>
                </Transition>
            </Menu>
          </li>
          

        </ul>
        </div>

      {/* <img src={toggle ? close : menu} alt="Menu" className='w-[40px] h-40px] object-contain' onClick={()=>setToggle((prev) => !prev)} />
      <div className={`${toggle ? 'flex' :'hidden'} p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className=' flex flex-col gap-5 justify-end items-start flex-1 '>
          <li></li>
          <button className=''>
          <a href="">Get in touch</a>
         </button>
        </ul>
        </div> */}


      </div>
    </nav>
  )
}

export default Navbar
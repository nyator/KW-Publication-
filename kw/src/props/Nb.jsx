import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const about = [
    {
      name: 'Author',
      description: 'Measure actions your users take',
      href: '##',
      icon: IconWrite,
    },
    {
      name: 'Team',
      description: 'Create your own targeted content',
      href: '##',
      icon: IconGroup,
    },
  ]
  
const publications = [
    {
      name: 'Books',
      description: 'Measure actions your users take',
      href: '##',
      icon: IconBook,
    },
    {
      name: 'journals',
      description: 'Create your own targeted content',
      href: '##',
      icon: IconWrite,
    },
    {
      name: 'Daily Devotions',
      description: 'Keep track of your growth',
      href: '##',
      icon: IconPaper,
    },
  ]


export default function Nb () {
  return (
    <div className="top-16 w-full max-w-sm px-4">
        <ul className='flex justify-center gap-10 lg:gap-20 text-[18px] relative'>
            
            <li>
                <Menu as='div' className=" inline-block text-left">
                    <div className='inline-flex items-center'>
                        <Menu.Button className='inline-flex items-center hover:scale-105 transition duration-150 ease-in-out'>
                            Publications
                        <ChevronDownIcon className="ml-2 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true"/>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                    <Menu.Items className="absolute -left-10 z-10 mt-3 w-screen max-w-[500px] transform px-4 sm:px-0 lg:max-w-xl">
                        <Menu.Item>
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                {publications.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            </div>
                        </Menu.Item>

                    </Menu.Items>

                    </Transition>
                </Menu>
            </li>


            <li>
                <Menu as='div' className="inline-block text-left">
                    <div className='inline-flex items-center'>
                        <Menu.Button className='inline-flex items-center hover:scale-105 transition duration-150 ease-in-out'>
                            About
                        <ChevronDownIcon className="ml-2 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true"/>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                    <Menu.Items className="absolute left-[-2.375rem] z-10 mt-3 w-screen max-w-[500px] transform px-4 sm:px-0 lg:max-w-xl">
                        <Menu.Item>
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                {about.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 "
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                    </div>
                                </a>
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
    
  )
}




function IconBook() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
    
    )
  }
  
  function IconGroup() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
  
    )
  }
  
  function IconPaper() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
  </svg>
  
    )
  }

  function IconWrite() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
    
  
    )
  }
  
  
  
  
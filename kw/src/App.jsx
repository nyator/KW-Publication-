import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


const App = () => {
  return (
    <div className="w-full py-6 px-5 md:px-20 font-poppins">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
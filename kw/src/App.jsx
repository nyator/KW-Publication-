import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Pic from './components/Pic'
import Offer from './components/Offer'

const App = () => {
  return (
    <div className="w-full py-6 px-5 md:px-20 font-poppins overflow-hidden">
      <Navbar />
      <Hero />
      <Offer/>
      {/* <Pic /> */}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
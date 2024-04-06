import React from 'react'
import { styles } from '../style'

const Hero = () => {
  return (
    <div className='py-20 my-20 '>
        <div >
            <h1 className={`${styles.heading}`}>Welcome to <br/> KingdomWord</h1>
            <p>Your one-stop destination for all things books! We take pride in
                 providing a platform for authors and readers to connect, 
                explore, and celebrate literature in all its forms.
            </p>
            <button>
                Order Book
            </button>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { Navbar, Footer } from '../../component/index'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='Checkout__'>

    <header>
      <div className='Checkout__nav'>
        <Navbar/>
      </div>
    </header>

    <div className='Checkout__main'>
      <div className='Checkout__main-form'>
        <h1>Checkout</h1>
        <form>

        </form>
      </div>

      <div className='Checkout__main-summary'>
        <h1>Summary</h1>
      </div>
    </div>

    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Checkout
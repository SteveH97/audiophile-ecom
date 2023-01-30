import React from 'react'
import { Link } from 'react-router-dom'
import './Earphones.css'
import { Navbar, Footer, Categories, BestGear } from '../../component'
import { DCatyx1, TCatyx1, MCatyx1 } from '../../assets/product-yx1-earphones'

const Earphones = () => {
  return (
    <div className='Ep'>
      <header>
        <Navbar/>
        <hr/>
        <h1>earphones</h1>
      </header>

      <div className='Ep__group1'>
        <picture>
          <source media='(max-width: 375px)' srcSet={`${MCatyx1} 375w`}/>
          <source media="(max-width: 768px)" srcSet={`${TCatyx1} 768w`}/>
          <source media='(max-width: 1440px)' srcSet={`${DCatyx1} 1440w`}/>
          <img src={DCatyx1} alt='header'/>
        </picture>  

        <h4>new product</h4>

        <div className='Hp__info'>
          <h1>YX1 WIRELESS EARPHONES</h1>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <Link to='/products/yx1'>See Product</Link>
        </div>
      </div>

      <div className='Ep__cat'>
        <Categories/>
      </div>

      <div className='Ep__bg'>
        <BestGear/>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Earphones
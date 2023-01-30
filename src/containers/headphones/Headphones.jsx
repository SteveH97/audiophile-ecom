import React from 'react'
import { Link } from 'react-router-dom'
import './Headphones.css'
import { Navbar, Footer, Categories, BestGear } from '../../component'
import { DCat992, TCat992, MCat992 } from '../../assets/product-xx99-mark-two-headphones'
import { DCat991, TCat991, MCat991 } from '../../assets/product-xx99-mark-one-headphones'
import {DCat59, TCat59, MCat59 } from '../../assets/product-xx59-headphones'


const Headphones = () => {
  return (
    <div className='Hp'>
      <header>
        <Navbar/>
        <hr/>
        <h1>headphones</h1>
      </header>

      <div className='Hp__group1'>
        <picture>
          <source media='(max-width: 375px)' srcSet={`${MCat992} 375w`}/>
          <source media="(max-width: 768px)" srcSet={`${TCat992} 768w`}/>
          <source media='(max-width: 1440px)' srcSet={`${DCat992} 1440w`}/>
          <img src={DCat992} alt='header'/>
        </picture>  

        <h4>new product</h4>

        <div className='Hp__info'>
          <h1>XX99 Mark II Headphones</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <Link to='/products/xx99-mark-two'>See Product</Link>
        </div>

      </div>

      <div className='Hp__group2'>
        <picture>
            <source media='(max-width: 375px)' srcSet={`${MCat991} 375w`}/>
            <source media="(max-width: 768px)" srcSet={`${TCat991} 768w`}/>
            <source media='(max-width: 1440px)' srcSet={`${DCat991} 1440w`}/>
            <img src={DCat991} alt='header'/>
          </picture>  

          <div className='Hp__info'>
            <h1>XX99 Mark I Headphones</h1>
            <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
            <Link to='/products/xx99-mark-one'>See Product</Link>
          </div>
      </div>

      <div className='Hp__group3'>
        <picture>
            <source media='(max-width: 375px)' srcSet={`${MCat59} 375w`}/>
            <source media="(max-width: 768px)" srcSet={`${TCat59} 768w`}/>
            <source media='(max-width: 1440px)' srcSet={`${DCat59} 1440w`}/>
            <img src={DCat59} alt='header'/>
          </picture>  

          <div className='Hp__info'>
            <h1>XX59 Headphones</h1>
            <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
            <Link to='/products/xx59'>See Product</Link>
          </div>
      </div>

      <div className='Hp__cat'>
        <Categories/>
      </div>

      <div className='Hp__bg'>
        <BestGear/>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Headphones
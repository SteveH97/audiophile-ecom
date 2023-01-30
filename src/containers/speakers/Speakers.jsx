import React from 'react'
import { Link } from 'react-router-dom'
import './Speakers.css'
import { Navbar, Footer, Categories, BestGear } from '../../component'
import { DCatzx7, TCatzx7, MCatzx7 } from '../../assets/product-zx7-speaker'
import { DCatzx9, TCatzx9, MCatzx9 } from '../../assets/product-zx9-speaker'

const Speakers = () => {
  return (
    <div className='Speakers'>
      <header>
        <Navbar/>
        <hr/>
        <h1>speakers</h1>
      </header>

      <div className='Speakers__group1'>
      <picture>
          <source media='(max-width: 375px)' srcSet={`${MCatzx9} 375w`}/>
          <source media="(max-width: 768px)" srcSet={`${TCatzx9} 768w`}/>
          <source media='(max-width: 1440px)' srcSet={`${DCatzx9} 1440w`}/>
          <img src={DCatzx9} alt='header'/>
        </picture>  

        <h4>new product</h4>

        <div className='Hp__info'>
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <Link to='/products/zx9'>See Product</Link>
        </div>
      </div>

      <div className='Speakers__group2'>
          <picture>
            <source media='(max-width: 375px)' srcSet={`${MCatzx7} 375w`}/>
            <source media="(max-width: 768px)" srcSet={`${TCatzx7} 768w`}/>
            <source media='(max-width: 1440px)' srcSet={`${DCatzx7} 1440w`}/>
            <img src={DCatzx7} alt='header'/>
          </picture>  

          <div className='Hp__info'>
            <h1>ZX7 SPEAKER</h1>
            <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
            <Link to='/products/zx7'>See Product</Link>
          </div>
      </div>


      <div className='Speakers__cat'>
        <Categories/>
      </div>

      <div className='Speakers__bg'>
        <BestGear/>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Speakers
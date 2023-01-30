import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Categories, BestGear } from '../../component/index'
import { Circles, speakerzx9, speakerzx7, earyx1, hero } from '../../assets/home/desktop'
import { MHeader, MEarphones, Mzx7, Mzx9 } from '../../assets/home/mobile'
import { THeader, TEarphones, Tzx7, Tzx9 } from '../../assets/home/tablet'

const Home = () => {

  return (
    <div className='Home'>

      <picture>
        <source media='(max-width: 375px)' srcSet={`${MHeader} 375w`}/>
        <source media="(max-width: 768px)" srcSet={`${THeader} 768w`}/>
        <source media='(max-width: 1440px)' srcSet={`${hero} 1440w`}/>
        <img src={hero} alt='header'/>
      </picture>  

      <header>
          <Navbar/>  
      </header>

      <hr/>
      
      <div className='Home__XX99'>
        <h4>new product</h4>
        <h1>XX99 mark II headphones</h1>
        <p>Experience natural lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to='/products/xx99-mark-two'>See product</Link>
      </div>

      <div className='Home__group2'>
        <Categories/>
      </div>

      <div className='Home__group3'>
        <img src={speakerzx9} alt='speakers9'/>
        <div className='Home__group3-zx9'>
          <h1>zx9 speaker</h1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound</p>
          <Link to='/products/zx9'>see product</Link>
        </div>
        <Circles/>
      </div>

      <div className='Home__group4'>

      <picture>
        <source media='(max-width: 375px)' srcSet={`${Mzx7} 375w`}/>
        <source media="(max-width: 768px)" srcSet={`${Tzx7} 768w`}/>
        <source media='(max-width: 1440px)' srcSet={`${speakerzx7} 1440w`}/>
        <img src={speakerzx7} alt='header'/>
      </picture>  

          <div className='Home__group4-zx7'>
            <h1>zx7 speaker</h1>
            <Link to='/products/zx7'>see product</Link>
          </div>       
      </div>

      <div className='Home__group5'>

      <picture>
        <source media='(max-width: 375px)' srcSet={`${MEarphones} 375w`}/>
        <source media="(max-width: 768px)" srcSet={`${TEarphones} 768w`}/>
        <source media='(max-width: 1440px)' srcSet={`${earyx1} 1440w`}/>
        <img src={earyx1} alt='header'/>
      </picture>  

        {/* <img src={earyx1} alt='ear' /> */}
        <div className='Home__group5-yx1'>
          <h1>yx1 earphones</h1>
          <Link to='/products/yx1'>see product</Link> 
        </div>
      </div>
 
      <div className='Home__group6'>
        <BestGear/>
      </div>

      <footer className='Home__footer'>
        <Footer/>
      </footer>

    </div>
  )
}

export default Home
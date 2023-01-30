import React from 'react'
import './BestGear.css'
import { bestGear } from '../../assets/shared/desktop'
import { Tbestgear } from '../../assets/shared/tablet'
import { Mbestgear } from '../../assets/shared/mobile'

const BestGear = () => {
  return (
    <div className='Bg'>
        <div className='Bg__info'>
          <h1>
            Bringing you the <span> best </span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <picture>
          <source media='(max-width: 375px)' srcSet={`${Mbestgear} 375w`}/>
          <source media="(max-width: 768px)" srcSet={`${Tbestgear} 768w`}/>
          <source media='(max-width: 1440px)' srcSet={`${bestGear} 1440w`}/>
          <img src={bestGear} alt='header'/>
        </picture>  
        {/* <img src={bestGear} alt="hero"/> */}
    </div>
  )
}

export default BestGear
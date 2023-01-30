import React from 'react'
import './Footer.css'
import { Logo, Facebook, Instagram, Twitter } from '../../assets/shared/desktop'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer__decor'></div>
        <div className='Footer__nav'>
            <Logo/>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/headphones'>headphones</Link></li>
                <li><Link to='/speakers'>speakers</Link></li>
                <li><Link to='/earphones'>earphones</Link></li>
            </ul>
        </div>
        <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <h4>
            Copyright 2021. All Rights Reserved
        </h4>
        <div className='Footer__socialMedia'>
            <Facebook/>
            <Twitter/>
            <Instagram/>
        </div>
    </div>
  )
}

export default Footer
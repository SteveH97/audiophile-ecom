import React from 'react'
import './Categories.css'
import { RightArrow } from '../../assets/shared/desktop'
import { thumbEar, thumbSpeakers, thumbHead } from '../../assets/shared/desktop'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='Cat'>
        <div className='Cat__hp'>
            <img src={thumbHead} alt='headphones'/>
            <h4>headphones</h4>
            <Link to='/headphones'>shop <RightArrow/></Link>
            <div className='mask'></div>
        </div>

        <div className='Cat__speakers'>
            <img src={thumbSpeakers} alt='speakers'/>
            <h4>speakers</h4>
            <Link to='/speakers'>shop <RightArrow/></Link>
            <div className='mask'></div>
        </div>

        <div className='Cat__ep'>
          <img src={thumbEar} alt='ear'/>
          <h4>earphones</h4>
          <Link to='/earphones'>shop <RightArrow/></Link>
          <div className='mask'></div>
        </div>
    </div>
  )
}

export default Categories
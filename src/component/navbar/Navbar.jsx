import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import {ReactComponent as Cart } from '../../assets/shared/desktop/icon-cart.svg'
import { HamMenu } from '../../assets/shared/tablet'
import { Categories, ECart } from '../'

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [ecomCart, setEcomCart] = useState(false);

  return (
    <nav>
        <div className='nav__desk'>
          <Logo style={{fontHeight:'25px'}}/>
          <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/headphones'>HEADPHONES</Link></li>
              <li><Link to='/speakers'>SPEAKERS</Link></li>
              <li><Link to='/earphones'>EARPHONES</Link></li>
          </ul>
          <Cart onClick={()=>setEcomCart(!ecomCart)}/>
        </div>

        <div className='nav__Tab'>
          <HamMenu className='nav__tab-menu' onClick={()=>setMenu(!menu)}/>
          <Logo style={{fontHeight:'25px'}} className='nav__tab-logo'/>    
          <Cart className='nav__tab-cart'/>
        </div>

        <div className='nav__mob'>
          <HamMenu  onClick={()=>setMenu(!menu)}/>
          <Logo style={{fontHeight:'25px'}}/>    
          <Cart/>
        </div>
        


      {
        menu ?
        <div className='nav__tab-openMenu'>
          <div className='nav__extra'>
            <Categories/>
          </div>
        </div>
        :
        <>
        </>
      }  

      {
        ecomCart ?
        (<div className='nav__cart'>
            <ECart/>
        </div>)
        :
        <>
        </>
      }
    </nav>
  )
}

export default Navbar
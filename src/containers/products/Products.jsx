import React from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import { Navbar, Footer, Categories, BestGear } from '../../component/index'
import './Products.css'

const Products = () => {

  const navigate = useNavigate();

  const goBack = () =>{
    navigate(-1);
  }

  return (
    <div className='Products__'>

      <button className='go__back' onClick={goBack}>Go Back</button>
      
      
      <header>
        <div className='Products__nav'>
          <Navbar/>
        </div>
      </header>
    
      <div className='Products__info'>
        <Outlet/>
      </div>

      <div className='Products__cat'>
        <Categories/>
      </div>

      <div className='Products__bg'>
        <BestGear/>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Products
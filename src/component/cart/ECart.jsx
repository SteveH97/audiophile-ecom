import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../reduxStore/cart-slice'
import { Imgxx59, Imgxx991, Imgxx992, Imgyx1, Imgzx7, Imgzx9 } from '../../assets/index'
import './Cart.css'
import { useEffect } from 'react'

const ECart = () => {

  const images = [Imgyx1, Imgxx59, Imgxx991, Imgxx992, Imgzx7, Imgzx9];
  const names = ['YX1', 'XX59', 'XX99 MK I', 'XX99 MK II', 'ZX7', 'ZX9'];
  const price = [599, 899, 1750, 2999, 3500, 4500];
  const [total, setTotal] = useState(0);
  const items = useSelector(state => state.cart.cart);
  const cart = useDispatch();


  const handlePic = (id) => ( <img src={images[id]} alt='ProPic'/> )
  
  const handleName = (id) => ( <h4>{names[id]}</h4> )
    
  const handleClean = () =>{
    cart(clearCart());
  }
  
  const handleAdd = (e) =>{
    console.log(e.target.value);
  } 

  const handleSub = (e) =>{
    console.log(e.target.value);
  }

  //Everytime cart gets a new item then it will cause a re-render 
  //where the cart items get the total price summed up
  useEffect(()=>{

    let sum = 0;

    for(let i = 0; i < items.length; i++){
      sum += price[items[i].id];
    }

    setTotal(sum);

  }, [items])

  return (
    <div className='ECart__'>

      <div className='ECart__group1'>
        <h3>Cart {`(${items.length})`}</h3>
        <button onClick={handleClean}>Remove all</button>
      </div>

      <div className='ECart__group2'>
        <ul>
          {
            items.map((product) =>
              (
                <li key={product.id}>
                  {handlePic(product.id)}
                  <div className='ECart__group2-NP'>
                    {handleName(product.id)}
                    <h5>{product.price}</h5>
                  </div>
                  <div className='ECart__group2-quantity'>
                    <button onClick={handleSub} value={product.id}>-</button>
                    <h2>{product.quantity}</h2>
                    <button onClick={handleAdd} value={product.id}>+</button>
                  </div>
                </li>
              )
            )
          }
          {/* <li>hey</li> */}
        </ul>
      </div>

      <div className='ECart__group3'>
        <h4>Total</h4>
        <h5>{`$${total}`}</h5>
      </div>

      <Link to='/checkout'>Checkout</Link>
    </div>
  )
}

export default ECart
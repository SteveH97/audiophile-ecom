import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  productData  from '../../../data.json' 
import { DGalOne59, DGalTwo59, DGalThree59, DImgPro59, TGalOne59, TGalTwo59, TGalThree59, TImgPro59, MGalOne59, MGalTwo59, MGalThree59, MImgPro59 } from '../../../assets/product-xx59-headphones/index'
import { DImgPro992, TImgPro992, MImgPro992 } from '../../../assets/product-xx99-mark-two-headphones/index'
import { DImgPro991, TImgPro991, MImgPro991 } from '../../../assets/product-xx99-mark-one-headphones/index'
import { DImgProzx9, TImgProzx9, MImgProzx9 } from '../../../assets/product-zx9-speaker/index'
import '../Item.css'

const Xx59 = () => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const minusQuantity = () =>{
    if(quantity !== 0){
      setQuantity(quantity - 1);
    }
  }

  //Since this is a small application with a small dataset, I'm just reading the json
  //locally. However, for future plans with a database, I'll just read 
  //in whatever product details i need instead of the whole dataset like below
  const getData = async () =>{
  
    try{
      setData(productData[1]);
      console.log(data);
      setLoading(false);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
    console.log(data);
  },[])

  return (
    <div className='Item__'>
    
    { loading === true ? (<h1>LOADING...</h1>) :
      
      (
        <>
          <div className='Item__group1'>

            <picture>
              <source media='(max-width: 375px)' srcSet={`${MImgPro59} 375w`}/>
              <source media="(max-width: 768px)" srcSet={`${TImgPro59} 768w`}/>
              <source media='(max-width: 1440px)' srcSet={`${DImgPro59} 1440w`}/>
              <img src={DImgPro59} alt='header'/>
            </picture>
          
            <div className='Item__group1-info'>
            
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <h6>${data.price}</h6>

              {/* <div className='Item__group1-buttons'> */}
                <div className='Item__group1-quantity'>
                  <button onClick={minusQuantity}>-</button>
                  <h2>{quantity}</h2>
                  <button onClick={()=>setQuantity(quantity +1)}>+</button>
                </div>
                <button className='Item__addToCart'>Add to cart</button>
              {/* </div> */}
              
            </div>

          </div>

          <div className='Item__group2'>
            <div className='Item__group2-features'>
              <h1>Features</h1>
              <p>{data.features}</p>
            </div>

            <div className='Item__group2-inTheBox'>
              <h1>In the box</h1>
              <ul>
                {data.includes.map(items=>(
                  <li key={items.item}>
                    <h5>{items.quantity}x </h5>

                    <h6>{items.item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='Item__group3'>
            <div className='Item__group3-leftSide'>
              <picture>
                  <source media='(max-width: 375px)' srcSet={`${MGalOne59} 375w`}/>
                  <source media="(max-width: 768px)" srcSet={`${TGalOne59} 768w`}/>
                  <source media='(max-width: 1440px)' srcSet={`${DGalOne59} 1440w`}/>
                  <img src={DGalOne59} alt='header'/>
              </picture>

              <picture>
                <source media='(max-width: 375px)' srcSet={`${MGalTwo59} 375w`}/>
                <source media="(max-width: 768px)" srcSet={`${TGalTwo59} 768w`}/>
                <source media='(max-width: 1440px)' srcSet={`${DGalTwo59} 1440w`}/>
                <img src={DGalTwo59} alt='header'/>
              </picture>
            </div>

            <div className='Item__group3-rightSide'>
              <picture>
                <source media='(max-width: 375px)' srcSet={`${MGalThree59} 375w`}/>
                <source media="(max-width: 768px)" srcSet={`${TGalThree59} 768w`}/>
                <source media='(max-width: 1440px)' srcSet={`${DGalThree59} 1440w`}/>
                <img src={DGalThree59} alt='header'/>
              </picture>
            </div>
            
          </div>

          <div className='Item__group4'>
            
            <h2>You may also like</h2>

            <div className='Item__group4-recomPro'>
              <div className='Item__group4-recommendation'>
                <picture>
                  <source media='(max-width: 375px)' srcSet={`${MImgPro992} 375w`}/>
                  <source media="(max-width: 768px)" srcSet={`${TImgPro992} 768w`}/>
                  <source media='(max-width: 1440px)' srcSet={`${DImgPro992} 1440w`}/>
                  <img src={DImgPro992} alt='header'/>
                </picture>

                <h1>xx99 mark ii</h1>
                <Link to='../xx99-mark-two'>see product</Link>
              </div>

              <div className='Item__group4-recommendation'>
                <picture>
                  <source media='(max-width: 375px)' srcSet={`${MImgPro991} 375w`}/>
                  <source media="(max-width: 768px)" srcSet={`${TImgPro991} 768w`}/>
                  <source media='(max-width: 1440px)' srcSet={`${DImgPro991} 1440w`}/>
                  <img src={DImgPro991} alt='header'/>
                </picture>

                <h1>xx99 mark i</h1>
                <Link to='../xx99-mark-one'>see product</Link>
              </div>

              <div className='Item__group4-recommendation'>
                <picture>
                  <source media='(max-width: 375px)' srcSet={`${MImgProzx9} 375w`}/>
                  <source media="(max-width: 768px)" srcSet={`${TImgProzx9} 768w`}/>
                  <source media='(max-width: 1440px)' srcSet={`${DImgProzx9} 1440w`}/>
                  <img src={DImgProzx9} alt='header'/>
                </picture>

                <h1>zx9 speaker</h1>
                <Link to='../zx9'>see product</Link>
              </div>
            </div>

          </div>
        </>
      )
      
      }
    </div>
  )
}

export default Xx59
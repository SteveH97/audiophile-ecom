import React from 'react'
import { Navbar, Footer } from '../../component/index'
import { useFormik } from 'formik' 
import './Checkout.css'

const Checkout = () => {

  const leForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNum: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      eMonNum: "",
      eMonPin: ""
    },

    onSubmit: (values) => {
      console.log(values);
    }
  })


  return (
    <div className='Checkout__'>

    <header>
      <div className='Checkout__nav'>
        <Navbar/>
      </div>
    </header>

    <div className='Checkout__main'>
      <div className='Checkout__main-form'>
        <h1 style={{marginBottom: '41px'}}>Checkout</h1>
        <form onSubmit={leForm.handleSubmit}>
            <div className='Checkout__inputContainer' style={{marginBottom: '29px'}}>
              <h2>Billing details</h2>
              <div className='Checkout__flex'>
                <div className='Checkout__inputs'>
                    <label>Name</label>
                    <input 
                      type='text' 
                      placeholder='Alexei Ward' 
                      name='name' 
                      value={leForm.values.name}
                      onChange={leForm.handleChange}
                    />
                </div>

                <div className='Checkout__inputs'>
                    <label>Email Address</label>
                    <input 
                      type='text' 
                      placeholder='alexei@mail.com' 
                      name='email' 
                      value={leForm.values.email}
                      onChange={leForm.handleChange}
                    />
                </div>

                <div className='Checkout__inputs'>
                    <label>Phone Number</label>
                    <input 
                      type='text' 
                      placeholder='+1 202-555-0136' 
                      name='phoneNum' 
                      value={leForm.values.phoneNum}
                      onChange={leForm.handleChange}
                    />
                </div>
              </div>
            </div>

            <div className='Checkout__inputContainer' style={{marginBottom: '37px'}}>
              <h2>shipping info</h2>
              <div className='Checkout__flex'>
                  <div className='Checkout__inputs'>
                      <label>Address</label>
                      <input 
                        type="text"
                        placeholder='1137 William Avenue'
                        name='address'
                        value={leForm.values.address}
                        onChange={leForm.handleChange}
                        style={{width: '610px'}}
                      />
                  </div>

                  <div className='Checkout__inputs'>
                      <label>Zip Code</label>
                      <input 
                        type="text"
                        placeholder='10001'
                        name='zipCode'
                        value={leForm.values.zipCode}
                        onChange={leForm.handleChange}
                      />
                  </div>

                  <div className='Checkout__inputs'>
                      <label>City</label>
                      <input 
                        type="text"
                        placeholder='New York'
                        name='city'
                        value={leForm.values.city}
                        onChange={leForm.handleChange}
                      />
                  </div>

                  <div className='Checkout__inputs'>
                      <label>Country</label>
                      <input 
                        type="text"
                        placeholder='United States'
                        name='country'
                        value={leForm.values.country}
                        onChange={leForm.handleChange}
                      />
                  </div>
              </div>
            </div>

            <div className='Checkout__inputContainer'>
              <h2>Payment details</h2>
              <div className='Checkout__flex'>
                <div className='Checkout__payMethod'>
                  <label>Payment Method</label>

                  <div className='Checkout__payMethod-options'>
                      <div className='Checkout__payOption'>
                        <input type='radio' name='radio' value='eMoney' id='eMoney'/>
                        <label for="eMoney">e-Money</label> 
                      </div>
                      <div className='Checkout__payOption'>
                        <input type='radio' name='radio' value='cash' id='cash'/>
                        <label for="cash">Cash on Delivery</label> 
                      </div>
                  </div>
                </div>
              </div>

              <div className='Checkout__flex'>
                  <div className='Checkout__inputs'>
                      <label>e-Money Number</label>
                      <input 
                        type="text"
                        placeholder='238521993'
                        name='eMonNum'
                        value={leForm.values.eMonNum}
                        onChange={leForm.handleChange}
                      />
                  </div>

                  <div className='Checkout__inputs'>
                      <label>e-Money Pin</label>
                      <input 
                        type="text"
                        placeholder='6891'
                        name='eMonPin'
                        value={leForm.values.eMonPin}
                        onChange={leForm.handleChange}
                      />
                  </div>
              </div>
            </div>
            {/* <button type='submit'>submit</button> */}
        </form>
      </div>

      <div className='Checkout__main-summary'>
        <h1>Summary</h1>
      </div>
    </div>

    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Checkout
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home, Headphones, Speakers, Earphones, Products, Checkout } from './containers/index'
import { Xx59, Xx991, Xx992, Yx1, Zx7, Zx9 } from './containers/products/index'

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/headphones' element={<Headphones/>}/>
      <Route path='/speakers' element={<Speakers/>}/>
      <Route path='/earphones' element={<Earphones/>}/>
      <Route path='/products' element={<Products/>}>
        <Route path='xx59' element={<Xx59/>}/>
        <Route path='xx99-mark-one' element={<Xx991/>}/>
        <Route path='xx99-mark-two' element={<Xx992/>}/>
        <Route path='yx1' element={<Yx1/>}/>
        <Route path='zx7' element={<Zx7/>}/>
        <Route path='zx9' element={<Zx9/>}/>
      </Route>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;

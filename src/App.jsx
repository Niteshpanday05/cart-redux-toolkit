import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Navbar'

const ProductList = () => {
  return (
    <>
    <Navbar/>
    <div className="product-list">
      <div className="product-card">
        <img src="image path" alt="image Title" />
        <h2>Product title</h2>
        <p>price: $200</p>
        <button>Add To Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductList

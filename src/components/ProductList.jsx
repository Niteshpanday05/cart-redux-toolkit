import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ProductList = () => {
  const[products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async() => {
      const response = await fetch ('https://fakestoreapi.com/products')
      const data = await response.json();
      console.log(data);
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
    <>
    <Navbar/>
    <div className="product-list">
     { products.map(product=>(
       <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title.length>20?`${product.title.slice(0,20)}...`:product.title}</h2>
        <p>price: ${product.price}</p>
        <button>Add To Cart</button>
      </div>
     ))}
    </div>
    </>
  )
}

export default ProductList

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/ShopCart/ProductSlice';

const ProductList = () => {
  
  const{items:products,status} = useSelector((state)=>state.products);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchProducts())
    }
   
  },[status])

  if(status==='loading')return <p>Loading Products....</p>
  if(status==='failed')return <p>Failed to load Products...please try again</p>

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

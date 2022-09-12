import React, { useEffect } from 'react'
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PreviewCard from './PreviewCard';
import { addToCart } from '../store/cart/cartSlice';
import { useDispatch } from 'react-redux';


const ProductsPreview = () => {

  const [products, setProducts]=useState([])
  const dispatch = useDispatch()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(()=>{
    fetch("http://localhost:5000/api/products")
    .then(response=> response.json())
    .then(data=> setProducts(data?.data))
    .catch(e => console.log(e))
  }, [])
  const onAddProduct = (product)=>{
    dispatch(addToCart(product))
  }

  return (
    <div className='container mx-auto pb-4 w-2/3 text-white bg-black'>
      <Carousel responsive={responsive}>
        {
          products.length >0 && products.map((product, index)=>{
            return(
              <div className="w-full p-3" key={index}>
                <PreviewCard key={index} product={product} onAddProduct={onAddProduct}/>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default ProductsPreview
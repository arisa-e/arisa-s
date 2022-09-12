import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts, decrementProductAmount, incrementProductAmount } from '../store/cart/cartSlice'

const Summary = () => {

  const cart = useSelector(cartProducts)
  const dispatch= useDispatch()

  return (
    <div className='flex flex-col'>
      {cart && cart?.map((product, index)=>{
        return(
          <div className='flex p-1 sm:p-2 border-b border-b-gray-200' key={index}>
            <div className="product-image mr-2 w-full sm:w-1/3">
              <img src={product.imageUrl} alt="" className='w-40 h-40 rounded-xl object-cover'/>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className='text-gray-600'>{product.desciption}</p>
            </div>
            <div className="product-price-qt flex flex-col items-center justify-center">
              <div className="price">{`${product.price}$`}</div>
              <div className="quantity flex">
                <button 
                className="p-1"
                disabled={product.amount <=0} 
                onClick={()=>dispatch(decrementProductAmount(product))}>
                  -
                </button>
                <span className='p-1'>{product.amount}</span>
                <button className="p-1"
                onClick={()=> dispatch(incrementProductAmount(product))}>
                  +
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Summary
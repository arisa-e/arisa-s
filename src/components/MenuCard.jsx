import React from 'react'
import Button from './Button'

const MenuCard = ({ product, onAddProduct }) => {
  return (
    <div className='p-4 m-4 rounded-lg bg-slate-50'>
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-3xl text-center">{product.name}</h2>
            <p className="text-2xl text-grey-500 text-center">
                {product.desciption}
            </p>
            <div className="items-center flex justify-between">
                <div className="text-black text-3xl">{product.price}</div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} alt=""
                className='w-40 h-40 rounded-xl object-cover' />
            </div>
            <div className="w-full flex items-center justify-center">
                <Button onClick={onAddProduct}>Add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default MenuCard
import React from 'react'

const AddProduct = ({onAddProduct}) => {
  return (
    <div className="flex justify-end">
        <button 
            onClick={onAddProduct} 
            className="bg-blue-300 hover:bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-lg"
        >
            <span>+</span>
        </button>
    </div>
  )
}

export default AddProduct
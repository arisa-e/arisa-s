import React from 'react'
import steak from "../assets/steak.png"
import Button from './Button'

const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
      <div className="banner-description w-full md:w-1/2 p-3">
        <h2 className="mb-4 text-white text-4xl font-bold">
          Get What you see
        </h2>
        <p className="font-semibold text-lg text-gray-500 py-2">
          Ready to blow your taste buds
        </p>
        <div className="btn-container">
          <Button>Order Now</Button>
          <a href="/menu" className='text-blue-300 hover:text-blue-500 font-bold text-decoration-line px-3'>
            Menu
          </a>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={steak} alt="" />
      </div>
    </div>
  )
}

export default Banner
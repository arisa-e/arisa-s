import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs"

const NavBar = () => {
  return (
    <nav id="navBar" className='bg-black text-white'>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="logo-wrapper pl-4 flex items-center">
                <Link to="/" className='toogleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'>
                    <h1>TASTY</h1>
                </Link>
            </div>
            <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/"className='text-xl'>Home</Link>
                <Link to=""className='text-xl'>About</Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Link to="/cart">
                    <BsCart4/>
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
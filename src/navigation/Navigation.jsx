import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components';
import { Cart, Checkout, Home, Login, Menu, Signup } from '../pages';
import { cartProducts } from '../store/cart/cartSlice';


const Navigation = () => {
  const productsInCart = useSelector(cartProducts)
  return (
    <Router>
        <NavBar cartContent ={productsInCart ? productsInCart.length : 0}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </Router>
  )
}

export default Navigation
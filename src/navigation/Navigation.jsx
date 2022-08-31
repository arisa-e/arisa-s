import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components';
import { Cart, Checkout, Home, Login, Menu, Signup } from '../pages';


const Navigation = () => {
  return (
    <Router>
        <NavBar/>
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
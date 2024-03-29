import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div>
        <Link to="/"><img src={logo} alt="logo image" /></Link>
        <Link to="/"><h4>Products</h4></Link>
        </div>
        <Link to="/cart"><button className="btn"><i className="fa-solid fa-cart-plus"></i></button></Link>
    </nav>
    </>
  )
}

export default Navbar

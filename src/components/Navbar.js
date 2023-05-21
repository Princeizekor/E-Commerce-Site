import React from 'react'
import logo from '../logo.svg';
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { shopContent } from '../Context/shop-content';

function Navbar() {
  const { id } = useParams()
  const { cartItems } = useContext(shopContent)
  const cartItemAmounts = cartItems[id]
  return (
    <>
    <nav className="navbar">
        <div>
        <Link to="/"><img src={logo} alt="logo image" /></Link>
        <Link to="/"><h4>Products</h4></Link>
        </div>
        <Link to="/cart"><button className="btn"><i className="fa-solid fa-cart-plus"></i>{cartItemAmounts > 0 && <>({cartItemAmounts})</>}</button></Link>
    </nav>
    </>
  )
}

export default Navbar

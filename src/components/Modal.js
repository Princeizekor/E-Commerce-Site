import React from 'react'
import { Link } from 'react-router-dom'

function Modal({closeModal}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Item Added To The Cart</h2>
        <img src="/img/product-1.png" alt="product image" />
        <div>
        <h2>Google Pixel - Black</h2>
        <p>Price : $ 10</p>
        <button className="shop" onClick={() => closeModal(false)}>Continue Shoping</button>
        <Link to="/carts/any"><button className="to-cart">Go To Cart</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Modal

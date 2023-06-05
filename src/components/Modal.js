import React from 'react';
import { Link } from 'react-router-dom';

function Modal( props ) {
  const { id, img, title, price } = props.data
  return (
    <>
        <h2>Item Added To The Cart</h2>
        <img src={`../${img}`} alt="product image" />
        <div>
          <h2>{title}</h2>
          <p>$ {price}</p>
          <Link to={`/cart`}><button className="to-cart">Go To Cart</button></Link>
        </div>
    </>
  );
}

export default Modal;
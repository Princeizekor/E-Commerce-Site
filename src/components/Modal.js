import React from 'react';
import { Link } from 'react-router-dom';

function Modal( props ) {
  const { id, img, title, price } = props.data
  return (
    <>
      <div className="modal-content" key={id}>
        <h2>Item Added To The Cart</h2>
        <img src={`../${img}`} alt="product image" />
        <div>
          <h2>{title}</h2>
          <p>$ {price}</p>
          {/* <button className="shop" onClick={() => closeModal(false)}>Continue Shopping</button> */}
          <Link to={`/cart`}><button className="to-cart">Go To Cart</button></Link>
        </div>
      </div>
    </>
  );
}

export default Modal;
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { shopContent } from '../../Context/shop-content';

function Products(props) {
  const [ids, setId] = useState(null)
  const [openModal, setOpenModal] = useState(false);
  const { id, img, title, price } = props.data
  const { addToCart, cartItems } = useContext(shopContent)
  const handleModal = () => {
    ids === id ? setOpenModal(false) : setOpenModal(true)
  }
  console.log(cartItems[id])
  const getData = () => {
      setOpenModal(true);
      setId(id)
      handleModal()
      addToCart(id)
  };

  return (
    <>
      <div className="phoneOne" key={id}>
        <Link to={`/details/${id}`}>
          <img src={img} alt="product image" />
        </Link>
        <button className="cart-btn" onClick={getData}>
        {cartItems[id] !== 0 && cartItems[id] !== undefined && cartItems[id] !== null && !Array.isArray(cartItems[id]) ? 'IN CART' : <i className="fa-solid fa-cart-plus"></i>}
        </button>
        <div >
          <p>{title}</p>
          <p className="color">${price}</p>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} id={ids}/>}
    </>
  );
}

export default Products;

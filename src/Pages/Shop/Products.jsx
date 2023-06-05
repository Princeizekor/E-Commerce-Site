import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Mod from '../../components/Mod';
import { shopContent } from '../../Context/shop-content';

function Products(props) {
  const [openModal, setOpenModal] = useState(false);
  const { addToCart } = useContext(shopContent)
  const { id, img, title, price } = props.data
  const getData = () => {
      setOpenModal(true);
      addToCart(id)
  };

  return (
    <>
      <div className="phoneOne" key={id} >
        <Link to={`/details/${id}`}>
          <img src={img} alt="product image" />
        </Link>
        <button className="cart-btn" onClick={getData}>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
        <div>
          <p>{title}</p>
          <p className="color">${price}</p>
        </div>
      </div>
      {openModal && <Mod closeModal={setOpenModal}/>}
    </>
  );
}

export default Products;

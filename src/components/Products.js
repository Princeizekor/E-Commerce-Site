import React, {useState} from 'react'
import {storeProducts} from "../data"
import { Link, } from 'react-router-dom'
import Modal from './Modal';

function Products() {
    const [openModal, setOpenModal] = useState(false)
    
  return (
    <div className="product">
        <h1 className='title'>Our <span>Products</span></h1>
        <div className="ProductOne">
            {
                 storeProducts?.map?.((product) => 
                        <div className="phoneOne">
                            <Link to={`/details/${product?.id}`}>
                    <img src={product?.img} alt="product image" />
                    </Link>
                    <button className="cart-btn" onClick={() => setOpenModal(true)}><i className="fa-solid fa-cart-plus"></i></button>
                    <div>
                        <p>{product?.title}</p>
                        <p className="color">${product?.price}</p>
                    </div>
                </div>
                 )
            }
           {openModal ? <Modal closeModal={setOpenModal}/> : null}
        </div>
    </div>
  )
}

export default Products

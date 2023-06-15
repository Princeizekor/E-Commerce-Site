import React from 'react'
import { storeProducts } from '../data'
import { Link } from 'react-router-dom'


function Mod({ closeModal, id }) {
  const filteredData = storeProducts.filter(item => item.id === id)
  return (
    <div className="modal">
      {filteredData.map((product, i) => 
          <div className="modal-content" key={i}>
            <h2>Item Added To The Cart</h2>
        <img src={`../${product?.img}`} alt="product image" />
        <div>
          <h2>{product?.title}</h2>
          <p>$ {product?.price}</p>
          <Link to={`/cart`}><button className="to-cart">Go To Cart</button></Link>
        </div>
              <button className="shop" onClick={() => closeModal(false)}>Continue Shopping</button>
            </div>

      )}

    </div>
  )
}

export default Mod

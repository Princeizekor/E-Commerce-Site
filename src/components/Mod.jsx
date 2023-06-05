import React, { useContext } from 'react'
import { shopContent } from '../Context/shop-content'
import Modal from './Modal'
import { storeProducts } from '../data'


function Mod({ closeModal }) {
  const { cartItems } = useContext(shopContent)
  return (
    <div className="modal">
      {storeProducts.map((product) => {
        if (cartItems[product.id] !== 0) {
          return (
          <div className="modal-content" key={product?.id}>
            <Modal data={product}/>
              <button className="shop" onClick={() => closeModal(false)}>Continue Shopping</button>
            </div>
      )}

      })}

    </div>
  )
}

export default Mod

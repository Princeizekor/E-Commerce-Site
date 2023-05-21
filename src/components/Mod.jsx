import React, { useContext } from 'react'
import { shopContent } from '../Context/shop-content'
import Modal from './Modal'
import { storeProducts } from '../data'


function Mod() {
    const { cartItems } = useContext(shopContent)
  return (
    <div className="modal">
                {storeProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Modal data={product} />
          }

        })}
    </div>
  )
}

export default Mod

import React, { useContext } from 'react'
import Mycart from './Mycart'
import { storeProducts } from '../../data'
import { shopContent } from '../../Context/shop-content'

function Cart() {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(shopContent)
  const totalAmount = getTotalCartAmount()
  return (
    totalAmount > 0 ?
      <>
        <h1 className='my'>Your <span className='myspan'>Cart</span></h1>
        <div className="cart-details">
          <p>PRODUCTS</p>
          <p>NAME OF PRODUCT</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>REMOVE</p>
          <p>TOTAL</p>
        </div>
        {storeProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Mycart data={product} />
          }

        })}
        <div className="cart-control">
          <button onClick={() => removeFromCart()}>CLEAR CART</button>
          <p>SUBTOTAL : $ {totalAmount}</p>
        </div>
      </>
      : <h1 className='empty'>YOUR CART IS EMPTY</h1>
  )
}

export default Cart

import React, { useContext } from 'react'
import { shopContent } from '../../Context/shop-content';
function Mycart(props) {
  const { id, img, title, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount, removeFromCarts } = useContext(shopContent)
  return (
    <div className="my-cart">
      <div className="cart-map-items">
        <img src={`../${img}`} alt="product image" />
        <p>{title}</p>
        <p>$ {price}</p>
        <div>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
        {/* <i className="fa-solid fa-delete-plus" onClick={() => removeFromCarts(id)}></i> */}
        {/* <button onClick={() => removeFromCarts(id)}>delete</button> */}
        <p>Item Total : {cartItems[id]}</p>
      </div>
    </div>
  )
}

export default Mycart

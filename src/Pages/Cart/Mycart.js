import React, { useContext } from 'react'
import { shopContent } from '../../Context/shop-content';
function Mycart(props) {
  const { id, img, title, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount, removeItem } = useContext(shopContent)
  const handleRemove = () => {
    removeItem(Number(id));
  };
  return (
    <div className="my-cart">
      <div className="cart-map-items">
        <img src={`../${img}`} alt="product image" />
        <p>{title}</p>
        <p>$ {price}</p>
        <div>
          <button onClick={() => cartItems[id] === 1 ? 1 : removeFromCart(id)} className='value'>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} className='value'/>
          <button onClick={() => addToCart(id)} className='value'>+</button>
        </div>
        {/* <i className="fa-solid fa-trash" onClick={handleRemove}></i> */}
        <button onClick={handleRemove}>Remove</button>
        <p>Item Total : {cartItems[id]}</p>
      </div>
    </div>
  )
}

export default Mycart

import React, { useState, createContext } from 'react'
import { storeProducts } from '../data';

export const shopContent = createContext(null);

function Shopcontent(props) {
  const getCartData = () => {
    let cart = {}
    for (let i = 1; i < storeProducts.length + 1; i++) {
      cart[i] = 0
    }
    return cart
  }
  const [cartItems, setCartItems] = useState(getCartData())

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = storeProducts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const removeFromCarts = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - cartItems }))
  }

  const updateCartItemAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const contentValue = { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount, removeFromCarts }
  return (
    <shopContent.Provider value={contentValue}>
      {props.children}
    </shopContent.Provider>
  )
}

export default Shopcontent

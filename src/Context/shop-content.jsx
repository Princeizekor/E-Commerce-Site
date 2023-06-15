import React, { useState, createContext, useEffect } from 'react'
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
  const filteredData = storeProducts.filter(item => item.id === item.id)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(filteredData));
  }, [filteredData]);
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cart');
  //   if (savedCart) {
  //     setCartItems(JSON.parse(savedCart));
  //   }
  // }, []);
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
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemAmount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const removeItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      delete updatedCartItems[String(itemId)];
      return updatedCartItems;
    });
  };

  // const removeItem = (itemId) => {
  //   setCartItems((prev) => {
  //     const updatedCartItems = Object.keys(prev).reduce((acc, key) => {
  //       if (key !== String(itemId)) {
  //         acc[key] = prev[key];
  //       }
  //       return acc;
  //     }, {});
  //     return updatedCartItems;
  //   });
  // };
  

  const clearCart = () => {
    setCartItems({});
  };

  const contentValue = { cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount, removeItem, clearCart }
  return (
    <shopContent.Provider value={contentValue}>
      {props.children}
    </shopContent.Provider>
  )
}

export default Shopcontent

// import React, { createContext, useEffect, useReducer } from 'react';
// import { storeProducts } from '../data';

// export const shopContent = createContext(null);

// const initialState = storeProducts.reduce((acc, product) => {
//   acc[product.id] = 0;
//   return acc;
// }, {});

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return { ...state, [action.itemId]: state[action.itemId] + 1 };
//     case 'REMOVE_FROM_CART':
//       return { ...state, [action.itemId]: state[action.itemId] - 1 };
//     case 'UPDATE_CART_ITEM_AMOUNT':
//       return { ...state, [action.itemId]: action.newAmount };
//     case 'REMOVE_ITEM':
//       const { [action.itemId]: _, ...updatedCartItems } = state;
//       return updatedCartItems;
//     case 'CLEAR_CART':
//       return {};
//     default:
//       return state;
//   }
// };

// function Shopcontent(props) {
//   const [cartItems, dispatch] = useReducer(cartReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = storeProducts.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   const addToCart = (itemId) => {
//     dispatch({ type: 'ADD_TO_CART', itemId });
//   };

//   const removeFromCart = (itemId) => {
//     dispatch({ type: 'REMOVE_FROM_CART', itemId });
//   };

//   const updateCartItemAmount = (newAmount, itemId) => {
//     dispatch({ type: 'UPDATE_CART_ITEM_AMOUNT', newAmount, itemId });
//   };

//   const removeItem = (itemId) => {
//     dispatch({ type: 'REMOVE_ITEM', itemId });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const contentValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemAmount,
//     getTotalCartAmount,
//     removeItem,
//     clearCart,
//   };

//   return (
//     <shopContent.Provider value={contentValue}>
//       {props.children}
//     </shopContent.Provider>
//   );
// }

// export default Shopcontent;


import React, { useState, useEffect } from 'react'
import {storeProducts} from "../data"
import { useParams } from 'react-router-dom'
import { Link, } from 'react-router-dom'
function Mycart() {
  const {id} = useParams()
    const [detail, setDetails] = useState({})
    const getData = () => {
      try {
        //   setTimeout(() => {
            const data = storeProducts?.filter(data => data?.id == id)[0]
            setDetails(data)
        //   }, 1500)
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <div className="my-cart">
      <h1>Your <span>Cart</span></h1>

      <div className="cart-details">
        <p>PRODUCTS</p>
        <p>NAME OF PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>REMOVE</p>
        <p>TOTAL</p>
      </div>

      <div className="cart-map-items">
      <img src={ `../${detail?.img}` } alt="product image" />
        <p>{ detail?.title }</p>
        <p>{ detail?.price }</p>
        <div>
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </div>
        <i className="fa-solid fa-delete-plus"></i>
        <p>Item Total : $ 10</p>
      </div>

      <div className="cart-control">
        <button>CLEAR CART</button>
        <p>SUBTOTAL :10</p>
        <p>SUBTOTAL :1</p>
        <p>SUBTOTAL :11</p>
      </div>
    </div>
  )
}

export default Mycart

import React, { useState, useEffect, useContext } from 'react'
import { storeProducts } from "../../data"
import { useParams, Link } from 'react-router-dom'
import { shopContent } from '../../Context/shop-content'

function Details() {
  const { id } = useParams()
  const [detail, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const { addToCart, cartItems } = useContext(shopContent)
  const cartItemAmount = cartItems[id]
  const getData = () => {
    try {
      setTimeout(() => {
        const data = storeProducts?.filter(data => data?.id == id)[0]
        setDetails(data)
        setLoading(false)
      }, 1500)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAdded = () => {
    addToCart(id)
  }

  return (
    <div className="details">
      <h1 className="titles">{detail?.title}</h1>
      <div>{loading ? loading : null}</div>
      <div className="phone">
        <div className="imageWrap">
          <img src={`../${detail?.img}`} alt="product image" />
        </div>
        <div className="phoneDetails">
          <h1>Model: {detail?.title}</h1>
          <h2>MADE BY: {detail?.company}</h2>
          <h3>Price : ${detail?.price}</h3>
          <h4>Some Info About Product</h4>
          <p>{detail?.info}</p>
          <div className="select">
            <Link to="/"><button className="btn2" >Back To Products</button></Link>
            <button className="btn3" onClick={handleAdded}>{cartItemAmount !== 0 ? 'In Cart' : 'Add To Cart'}{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

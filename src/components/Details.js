import React, { useState, useEffect } from 'react'
import {storeProducts} from "../data"
import { useParams } from 'react-router-dom'
import { Link, } from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const [detail, setDetails] = useState({})
    // const [loading, setLoading] = useState(true)
    const getData = () => {
      try {
          setTimeout(() => {
            const data = storeProducts?.filter(data => data?.id == id)[0]
            setDetails(data)
            // setLoading(false)
          }, 1500)
      } catch (error) {
          console.log(error)
          // setLoading(false)
      }
    }

    useEffect(() => {
        getData()
    }, [])
    
  return (
    <div className="details">
        <h1 className="titles">{ detail?.title }</h1>
        {/* <div>{loading ? loading : null}</div> */}
        <div className="phone">
            <div className="imageWrap">
            <img src={ `../${detail?.img}` } alt="product image" />
            {console.log(detail?.img)}
            </div>
            <div className="phoneDetails">
                <h1>Model: { detail?.title }</h1>
                <h2>MADE BY: { detail?.company }</h2>
                <h3>Price : ${ detail?.price }</h3>
                <h4>Some Info About Product</h4>
                <p>{ detail?.info }</p>
                <div className="select">
                <Link to="/"><button className="btn2">Back To Products</button></Link>
                <Link to="/carts"><button className="btn3">Add To Cart</button></Link>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details

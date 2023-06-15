import React from 'react'
import Products from './Products'
import { storeProducts } from "../../data";

function Shop() {
    return (
        <div className="product">
            <h1 className='title'>Our <span>Products</span></h1>
            <div className="ProductOne">
                {storeProducts.map((product) => (
                    <Products key={product.id} data={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop

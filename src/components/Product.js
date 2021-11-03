import React from "react"
import Rating from "./Rating"
export default function Product (props) {
    const {product } = props
    return (
    <div className="card" key={product.id}>
        <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.productName} />
        </a>
        <div className="card-body">
        <a href={`/product/${product.id}`}>
            <h2>{product.productName}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <div className="price">${product.price}</div>
        </div>
    </div>
    )
}

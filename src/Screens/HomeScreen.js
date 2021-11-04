import React, { useState } from 'react';
import data from '../data'
import Product from '../components/Product'
export default function HomeScreen() {
  //react hooks
  const [products, setProducts] = useState([]);
    return (
        <div>
          <div className="row center">
            {
              data.products.map(product => (
                  <Product product={product}></Product>
              ))
            }
          </div>
        </div>
    )   
}
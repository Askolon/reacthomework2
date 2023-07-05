import React from 'react'
import Product from '../Product'

export default function ProductList({Arr, remove}) {
  return (
    <div>
    {
      Arr.length ===0
      ? <button onClick={ product => <Product key={product.id} {...product} remove={remove}/>}>Refresh</button>
      :
      Arr.map(product => <Product key={product.id} {...product} remove={remove}/> )
    }
    </div>
  )
}

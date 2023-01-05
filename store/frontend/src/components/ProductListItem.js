import React from 'react'
import {Link} from 'react-router-dom'

const ProductListItem = ({product}) => {
  return (
    <div className="flex justify-center items-center space-x-20">
        <div>id: {product.id}</div>
        <h3>{product.name}</h3>
        <div>{product.price}</div>
        <Link to={`/products/${product.id}`}>
            <img className='w-28'src={'http://127.0.0.1:8000'+product.image}/>
        </Link>
    </div>
  )
}

export default ProductListItem
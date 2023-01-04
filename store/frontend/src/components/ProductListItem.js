import React from 'react'

const ProductListItem = ({product}) => {
  return (
    <div className="flex justify-center items-center space-x-20">
        <div>id: {product.id}</div>
        <h3>{product.name}</h3>
        <div>{product.price}</div>
        <a href={`http://localhost:3000/products/${product.id}/`}>
            <img className='w-28'src={'http://127.0.0.1:8000'+product.image}/>
        </a>
    </div>
  )
}

export default ProductListItem
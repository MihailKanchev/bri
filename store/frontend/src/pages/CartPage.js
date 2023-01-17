import React from 'react'
import { useState } from 'react';
import ProductListItem from '../components/ProductListItem'
import { useCookies } from 'react-cookie';

const CartPage = () => {
  const [cookies, setCookie] = useCookies(['cart']);
  var cart = cookies.cart;

  return (
    <div>
      <div className='products-list'>
          {cart.map((product, index) => (
              <ProductListItem key={index} product={product}/>
          ))}
      </div>
    </div>
  )
}

export default CartPage
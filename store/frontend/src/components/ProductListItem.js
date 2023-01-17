import React from 'react'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'


const ProductListItem = ({product}) => {
  const [cookies, setCookie] = useCookies(['cart']);
  var cart = [];
  
  const handleAdd = () => {
    cart = cookies.cart
    cart.push(product);
    setCookie('cart', JSON.stringify(cart), {path:'/'});
    console.log("cookies: " + cookies.cart);
  };

  const handleRemove = () => {
    cart = cookies.cart
    /*Loop the cart and remove the specific item*/
    for(var i = 0; i < cart.length; i++) if(cart[i].id === product.id) cart.splice(i, 1)
    setCookie('cart', JSON.stringify(cart), {path:'/'});
    console.log("cookies: " + JSON.stringify(cookies.cart));
  };

  return (
    <div className="flex justify-center items-center space-x-20">
        
        <div>id: {product.id}</div>
        <h3>{product.name}</h3>
        <div>{product.price}</div>
        <Link to={`/products/${product.id}`}>
            <img className='w-28'src={'http://127.0.0.1:8000'+ product.images[0].image_url}/>
        </Link>
        <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleAdd}
        >
          Добави
        </button>
        <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleRemove}
        >
          Премахни
        </button>
    </div>
  )
}

export default ProductListItem;
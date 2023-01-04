import React, {useState, useEffect} from 'react'
import ProductListItem from '../components/ProductListItem'

const ProductsList = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    let getProducts = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/products/')
        let data = await response.json()
        setProducts(data)
    }

    return (
        <div>
            <div className='products-list'>
                {products.map((product, index) => (
                    <ProductListItem key={index} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList
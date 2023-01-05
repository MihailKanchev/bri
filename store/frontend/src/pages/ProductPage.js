import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem'


const ProductPage = ({ match }) => {
    
    let params = useParams()
    let id = params.id
    let [product, setProduct] = useState('')

    useEffect(() => {
        getProduct()
    }, [id])

    let getProduct = async() => {
        let response = await fetch(`http://127.0.0.1:8000/api/products/${id}/`)
        let data = await response.json()
        setProduct(data)
    }


    return (
        
        <ProductListItem product={product}/>
        
   
    );
}

export default ProductPage
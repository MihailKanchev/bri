import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem'
import {useQuery} from "@tanstack/react-query"
import {fetchProducts} from '../fetchers/products'
 

const ProductPage = () => {
    let { id } = useParams();
    const { isLoading, data } = useQuery(
        ["products"]
       ,fetchProducts
       ,{ staleTime: 6000 
         ,cacheTime:10
       }
    );
    let product;
    for (let i = 0; i < data.length; i++){
        if(data[i].id == id) product = data[i]
    };

    console.log("Render")

    useEffect(() => {
        console.log("Component mounted!")
    }, [])

    if(isLoading){
        console.log("Loading...")
        return <div>Loading...</div>
    }


    return (
        <div>
            <ProductListItem product={product}/>
            <div>
                {product.images.map((image, index) => (
                    <img key={index} className='w-28' src={'http://127.0.0.1:8000'+ image.image_url}/>
                ))}
            </div>
            
        </div>
        
        
   
    );
}

export default ProductPage
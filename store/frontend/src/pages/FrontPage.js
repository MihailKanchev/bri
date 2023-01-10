import ProductsList from '../components/ProductsList'
import {useQuery} from "@tanstack/react-query"
import React, {useEffect} from 'react'
import {fetchProducts} from '../fetchers/products'

const FrontPage = () => {
    console.log("Render")

    const { isLoading, data } = useQuery(
         ["products"]
        ,fetchProducts
        ,{ staleTime: 6000 
          ,cacheTime: 6000
        }
    );

    

    useEffect(() => {
        console.log("Component mounted!")
    }, [])

    if(isLoading){
        console.log("Loading...")
        return <div>Loading...</div>
    }

    
    return (
        <div>
            <ProductsList products={data}/>
        </div>
        
        
        
   
    );
}

export default FrontPage
import ProductListItem from '../components/ProductListItem'

const ProductsList = ({products}) => {

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
export const fetchProducts = async() => {
    console.log("Fetching products.");
    const response = await fetch('http://127.0.0.1:8000/api/products/');
    const products = await response.json();

    console.log("Products: ",products);
    return products;
};


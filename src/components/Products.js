import { useSelector } from "react-redux";
import Product from "./Product"

const Products = () => {

    const products = useSelector(state=>state);
    return (

        <Product id={products.addProduct[0].id} title={products.addProduct[0].title} description={products.addProduct[0].description} price={products.addProduct[0].price} rating={products.addProduct[0].rating}/>
        
    )
}

export default Products
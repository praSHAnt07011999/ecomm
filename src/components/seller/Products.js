import { useSelector } from "react-redux";
import Product from "./Product";
import './Products.css';

export const Products = () => {

    let products = useSelector(state=>state.productReducer);
    return (
        <div className="products_container">
            {
                products.map( (product) => (
                    <Product key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} image={product.image} quantity={product.quantity}/>
                ))
            } 
        </div>
    )
}

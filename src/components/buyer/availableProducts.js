import { useSelector } from "react-redux";
import { AvailableProduct } from "./availableProduct";
import './availableProducts.css';

export const AvailableProducts = () => {

    let products = useSelector(state=>state.productReducer);
    return (
        <div className="products_container">
            {
                products.map( (product) => (
                    <AvailableProduct key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} rating={product.rating} image={product.image} quantity={product.quantity}/>
                ))
            } 
        </div>
    )
}

import { useSelector } from "react-redux";
import Products from "./Products";
import './Home.css';

const Home = () => {
    const products = useSelector(state=>state.addProduct);
    return (
        <div className="home_container">
        {
            Object.keys(products).length===0 ? <p className="no-product-message">No product added! You can add products from Add Product section.</p> : <Products />
        }
        </div>
    )
}

export default Home
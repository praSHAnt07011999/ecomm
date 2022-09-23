import { Products } from './Products';
import { useSelector } from 'react-redux';

export const SellerHome = () => {
    const products = useSelector(state=>state.productReducer);

    return(
        <div>
            {
                Object.keys(products).length===0 ? <p className="no-product-message">No product added! You can add products from Add Product section.</p> : <Products />
            }
        </div>
    )
}
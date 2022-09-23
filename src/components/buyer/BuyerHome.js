import { AvailableProducts } from './availableProducts';
import { useSelector } from 'react-redux';

export const BuyerHome = () => {
    const products = useSelector(state=>state.productReducer);

    return(
        <div>
            {
                Object.keys(products).length===0 ? <p className="no-product-message">No product available! You will see products when seller adds them.</p> : <AvailableProducts />
            }
        </div>
    )
}
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import './BuyerHeader.css';

export const BuyerHeader = () => {
    return (
        <div className="header">
            <Link to="/" style={ { textDecoration: "none" } }>
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize="large"/>
                    <h2 className="header_logoTitle">eSHOP</h2>
                </div>
            </Link>
            <Link to="/buyerHome" style={ { textDecoration: "none" } }>
                <div className="add_to_product">
                    <h2 className="add_to_product_heading">Shop</h2>
                </div>
            </Link>
            <Link to="/cart" style={ { textDecoration: "none" } }>
                <div className="cart">
                    <h2 className="cart_heading">Cart</h2>
                </div>
            </Link>
            <Link to="/buyerOrders" style={ { textDecoration: "none" } }>
                <div className="buyer_orders">
                    <h2 className="cart_heading">Your Orders</h2>
                </div>
            </Link>
        </div>
    )
}

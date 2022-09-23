import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import './SellerHeader.css';

export const SellerHeader = () => {
    return (
        <div className="header">
            <Link to="/" style={ { textDecoration: "none" } }>
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize="large"/>
                    <h2 className="header_logoTitle">eSHOP</h2>
                </div>
            </Link>
            <Link to="/sellerHome" style={ { textDecoration: "none" } }>
                <div className="products">
                    <h2 className="products_title">Products</h2>
                </div>
            </Link>
            <Link to="/addProduct" style={ { textDecoration: "none" } }>
                <div className="add_to_product">
                    <h2 className="add_to_product_heading">Add Product</h2>
                </div>
            </Link>
            <Link to="/orders" style={ { textDecoration: "none" } }>
                <div className="orders_received">
                    <h2 className="orders_heading">Orders</h2>
                </div>
            </Link>
        </div>
    )
}

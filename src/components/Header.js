import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={ { textDecoration: "none" } }>
                <div className="header_logo">
                    <StorefrontIcon className="header_logoImage" fontSize="large"/>
                    <h2 className="header_logoTitle">eSHOP</h2>
                </div>
            </Link>
            <Link to="/addProduct" style={ { textDecoration: "none" } }>
                <div className="add_to_product">
                    <h2 className="add_to_product_heading">Add Product</h2>
                </div>
            </Link>
            <Link to="/cart" style={ { textDecoration: "none" } }>
                <div className="cart">
                    <h2 className="cart_heading">Cart</h2>
                </div>
            </Link>
        </div>
    )
}

export default Header
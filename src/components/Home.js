
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home_container">

            <div className="seller-login">
                <h3 className="seller-login-heading">For Sellers</h3>
                <Link to='/sellerHome' style={ { textDecoration: "none" }}>
                    <button className="seller-login-button">Login</button>
                </Link>
            </div>

            <div className="buyer-login">
                <h3 className="buyer-login-heading">For Buyers</h3>
                <Link  to='/buyerHome' style={ { textDecoration: "none" }}>
                    <button className="buyer-login-button">Login</button>
                </Link>
            </div>

        </div>
    )
}

export default Home
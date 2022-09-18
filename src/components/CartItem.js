import './CartItem.css'
import bicycle from '../resources/images/bicycle.jpg';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/reducers/addToCartSlice';
import { subtractFromTotal } from '../redux/reducers/cartTotalSlice';

const CartItem = (props) => {

    const dispatch = useDispatch();

    const RemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
        dispatch(subtractFromTotal(item));
    }

    return (
        <div className="cart-item-container">
            <div className='image-container'>
                <img src={bicycle} alt='product' className='product-image'/>
            </div>
            <div className='cart-item-details'>
                <h3 className='item-title'>{props.title}</h3>
                <p className='item-description'>{props.description}</p>
                <span className='item-price'>Rs. {props.price}</span>
                <span className='item-rating'>{props.rating} ⭐️</span>
                <button className='remove-from-cart-button' onClick={() => RemoveFromCart(props)}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartItem
import './CartItem.css'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions'
import { subtractFromTotalAction } from '../../redux/actions/cartTotalActions';

export const CartItem = (props) => {

    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.id));
        dispatch(subtractFromTotalAction(item.price));
    }

    return (
        <div className="cart-item-container">
            <div className='image-container'>
                <img src={props.image} alt='product' className='product-image'/>
            </div>
            <div className='cart-item-details'>
                <h3 className='item-title'>{props.title}</h3>
                <p className='item-description'>{props.description}</p>
                <span className='item-price'>Rs. {props.price}</span>
                <span className='item-rating'>{props.rating} ⭐️</span>
                <button className='remove-from-cart-button' onClick={() => handleRemoveFromCart(props)}>Remove From Cart</button>
            </div>
        </div>
    )
}

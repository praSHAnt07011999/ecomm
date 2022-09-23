import "./availableProduct.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions'
import { addToTotalAction } from '../../redux/actions/cartTotalActions';


export const AvailableProduct = (props) => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(addToTotalAction(item.price));
    }

    return (
        <div className='container'>
            <div className='image-container'>
                <img className='picture' src={props.image} alt='bicycle' />
            </div>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <span className='price'>Rs. {props.price}</span><br/>
            <span className='rating'>{props.rating} ⭐️</span>
            <button onClick={()=>handleAddToCart(props)} className='cart_button'>Add To Cart</button>
        </div>
    )
}

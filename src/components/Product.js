import "./Product.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/addToCartSlice';
import { addToTotal } from '../redux/reducers/cartTotalSlice';

const Product = (props) => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(addToTotal(item));
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

export default Product
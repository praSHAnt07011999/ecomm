import bicycle from '../resources/images/bicycle.jpg';
import "./Product.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/addToCartSlice';

const Product = (props) => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div className='container'>
            <div className='image-container'>
                <img className='picture' src={bicycle} alt='bicycle' />
            </div>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <span className='price'>Rs. {props.price}</span><br/>
            <span className='rating'>{props.rating} ⭐️</span>
            <button onClick={()=>handleAddToCart(props)} className='cart_button'>AddToCart</button>
        </div>
    )
}

export default Product
import "./Product.css";
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../../redux/actions/productsActions';
import { Link } from "react-router-dom";

const Product = (props) => {

    const dispatch = useDispatch();


    const handleRemove = (productId) => {
        dispatch(removeProductAction(productId))
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
            <Link to='/updateProduct' state={{ item: props }}>
                <button className='update_button'>Update</button>
            </Link>
            
            <button onClick={()=>handleRemove(props.id)} className='remove_button'>Remove</button>
        </div>
    )
}

export default Product
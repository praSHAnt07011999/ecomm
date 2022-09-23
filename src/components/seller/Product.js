import "./Product.css";
// import { useDispatch } from 'react-redux';


const Product = (props) => {

    // const dispatch = useDispatch();

    const handleUpdate = (item) => {
        
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
            <button onClick={()=>handleUpdate(props)} className='update_button'>Update</button>
        </div>
    )
}

export default Product
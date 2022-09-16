import bicycle from '../resources/images/bicycle.jpg';
import "./Product.css";

const Product = (props) => {
    return (
        <div className='container'>
            <div className='image-container'>
                <img className='picture' src={bicycle} alt='bicycle' />
            </div>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <span className='price'>{props.price}</span><br/>
            <span className='rating'>{props.rating}</span>
        </div>
    )
}

export default Product
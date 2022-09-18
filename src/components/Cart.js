import { useSelector } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {

const cartItems = useSelector( state => state.addToCart)

    return(
        <div className='cart_container'>
            <h1 className='heading'>Your Cart</h1>
            <div className='item_container'>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} rating={item.rating}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
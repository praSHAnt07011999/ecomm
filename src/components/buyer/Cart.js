import { useSelector } from 'react-redux';
import './Cart.css';
import { CartItem } from './CartItem';
import { CheckoutButton } from './CheckoutButton';

export const Cart = () => {

    const cartItems = useSelector( state => state.cartReducer);
    const total = useSelector( state => state.cartTotalReducer);

    return(
        <div className='cart_container'>
            <h1 className='heading'>Your Cart</h1>
            <div className='item_container'>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} rating={item.rating} image={item.image} quantity={item.quantity}/>
                    ))
                }
                {
                    total===0?<p>No item in cart.</p>:<CheckoutButton/>
                }
            </div>
        </div>
    )
}

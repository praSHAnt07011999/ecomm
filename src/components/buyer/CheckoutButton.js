import { useSelector } from 'react-redux';

export const CheckoutButton = () => {
    const total = useSelector( state => state.cartTotalReducer);
    return(
        <div>
            <p className='total_amount'>Total Amount: {total}</p>
            <button className='checkout_button'>Checkout</button>
        </div>
    )
}
import { useDispatch  } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { placeOrderAction } from '../../redux/actions/orderActions';
import { clearCart } from '../../redux/actions/cartActions'
import { clearTotalAction } from '../../redux/actions/cartTotalActions';
import { useNavigate } from "react-router-dom";
import './Checkout.css';

export const Checkout = () => {

    const navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const orderItems = useSelector(state=>state.cartReducer)
    const total = useSelector( state => state.cartTotalReducer);

    const dispatch = useDispatch();

    const handleCheckout = (event) => {
        if(!name || !address || !phoneNumber) {
            alert('Please provide required fields');
        }
        else {
            event.preventDefault();
            const orderId = uuidv4();
            const newOrder = {
                id:orderId,
                name:name,
                address:address,
                phoneNumber:phoneNumber,
                items:[...orderItems],
                total: total
            };
            dispatch(placeOrderAction(newOrder));
            dispatch(clearCart());
            dispatch(clearTotalAction());
            setName('');
            setAddress('');
            setPhoneNumber('');
            navigate('/buyerOrders');
        }
    }

    return (
        <div className="form-container">
            <h3 className="form-heading">Customer Details</h3>
            <form onSubmit={handleCheckout} className="add-product-form">
            <label className="name-label">Name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            </label>
            <label className="address-label">Address:
                <input
                type="text"
                name="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            </label>
            <label className="phone-number-label">Phone:
                <input
                type="number"
                name="phone_number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <p>Total: {total}</p>
            </label>
                <input type="submit" className="submit-button" />
            </form>
        </div>
    )
}

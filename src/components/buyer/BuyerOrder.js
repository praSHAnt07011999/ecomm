import { useDispatch } from 'react-redux';
import { cancelOrderAction } from '../../redux/actions/orderActions';
import './BuyerOrder.css';

export const BuyerOrder = (props) => {

    const dispatch = useDispatch();

    const handleCancel = (orderId) => {
        dispatch(cancelOrderAction(orderId));
    }

    return(
        <div className="order_container">
            <p>Order Id: {props.order.id}</p>
            <p>Name: {props.order.name}</p>
            <p>Address: {props.order.address}</p>
            <p>Phone Number: {props.order.phoneNumber}</p>
            <h2>Order Items</h2>
            {
                props.order.items.map((item) => (
                    <div key={item.id} className='order_item_container'>
                        <p>Item Id: {item.id}</p>
                        <p>Item Title: {item.title}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))
            } 
            <h3>Total: {props.order.total}</h3>
            <button onClick={() => handleCancel(props.order.id)}>Cancel Order</button>
        </div>
    )
}
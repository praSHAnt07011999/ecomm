import { useSelector } from "react-redux";
import { Order } from './Order';
import './Orders.css'

export const Orders = () => {

    const orders = useSelector(state => state.orderReducer)

    return(
        <div>
        <h1 className="seller_orders_heading">Orders</h1>
            <div className="seller_orders_container">
                {
                    Object.keys(orders).length===0 ? 
                    <p className="no_order_message">No order placed by customers</p>:
                    orders.map( (order) => (
                        <Order key={order.id} order={order}/>
                    ))
                } 
            </div>
        </div>
        
    )
}
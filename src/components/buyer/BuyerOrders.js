import { useSelector } from "react-redux";
import { BuyerOrder } from './BuyerOrder';
import './BuyerOrders.css'

export const BuyerOrders = () => {

    const orders = useSelector(state => state.orderReducer)

    return(
        <div>
        <h1 className="orders_heading">Orders</h1>
            <div className="buyer_orders_container">
                {
                    orders.map( (order) => (
                        <BuyerOrder key={order.id} order={order}/>
                    ))
                } 
            </div>
        </div>
        
    )
}
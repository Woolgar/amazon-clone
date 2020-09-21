import React from 'react';
import './Order.css';
import moment from "moment";
function Order({ order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM DO YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                
            ))}
        </div>
    )
}

export default Order

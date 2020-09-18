import React from 'react'
import './Payment.css';
import { useStateValue} from "./Stateprovider";
import CheckoutProduct from './CheckoutProduct';
import { Link} from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
function Payment() {
    const [{basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements =useElements();

    const handleSubmit = e => {

    }
    const handleChange = e => {

    }


    return (
        <div className="payment">
            <div className="payment__container">
                {/* payment sec - delivery addr */}
                <h1>
                    Checkout (<Link to="/checkout">{basket?.lenght} items
                </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                    <h3>Delivery address</h3>
                    </div>
                <div className="payment__address">
                    <p>
                        {user?.email}
                    </p>
                    <p>
                     react lane  
                    </p>
                    <p>
                    Aalborg, DK
                    </p>
                </div>
                </div>
                {/* payment sec - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                    <h3>Review order</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                          <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}    
                         />
                        ))}
                    </div>
                </div>
                {/* payment sec - payment method */}
                <div className="payment__section">
                <div className="payment__title">
                    <h3>payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={onSubmit}>
                            <CardElement onChange={handleChange}/>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment

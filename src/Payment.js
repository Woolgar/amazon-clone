import React from 'react'
import './Payment.css';
import { useStateValue} from "./Stateprovider";
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const [{basket, user }, dispatch] = useStateValue();




    return (
        <div className="payment">
            <div className="payment__container">
                {/* payment sec - delivery addr */}
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
                            title={item.tile}
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
                    
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment

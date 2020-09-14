import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="check__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad banner"/>
            
            <div>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                {/* checkout product */}
            </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

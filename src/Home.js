import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home__row">
                <Product id="543254153" title='The lean startup: How constant innovation creates radically succesful businesses Paperback' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                <Product id="543254153" title='beyerdynamic DT 770 PRO Studio Headphones - 80 Ohm' price={105.00} image="https://images-na.ssl-images-amazon.com/images/I/81uoNwdmLQL._AC_SX679_.jpg" rating={5} />
            </div>
            <div className="home__row">
            <Product id="543254153" title='Echo Dot (3rd Gen) - Smart speaker with Alexa' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg" rating={5} />
            <Product id="543254153" title='Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Grey (4th Generation' price={1069.99} image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg" rating={5} />
            <Product id="543254153" title='Canon RF 24-105mm Body f/4 L IS USM Lens - Black' price={1111.99} image="https://images-na.ssl-images-amazon.com/images/I/610DDfGRG6L._AC_SL1024_.jpg" rating={5} />
            </div>
            <div className="home__row">
            <Product id="543254153" title='Amazon Echo Spot, Smart Alarm Clock with Alexa - Black
' price={79.99} image="https://images-na.ssl-images-amazon.com/images/I/6182hqle0hL._AC_SL1000_.jpg" rating={4} />
            </div>
            </div>
        </div>
    )
}

export default Home

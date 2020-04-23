import React from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './EmptyCart.css';

const EmptyCart = props => (

       <div className="EmptyCart">
            <FontAwesomeIcon icon={faShoppingCart} size="4x"> </FontAwesomeIcon> 
            <p> Twój koszyk jest pusty! </p>
            </div>
);

export default EmptyCart;
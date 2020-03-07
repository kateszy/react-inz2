import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const SideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/" exact> Strona główna </a></li>
                <li><a href="/products/hats"> Czapki </a></li>
                <li><a href="/products/shoes"> Koszulki </a></li>
                <li><a href="/products/trousers"> Spodnie </a></li>
                <li><a href="/products/tshirts"> Bluzy</a></li>
                <li><a href="/promotions"> Promocje </a></li>
                <div className="reverse">
                <li><a href="/login"><NavLink to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </NavLink> Logowanie</a></li>
                <li><a href="/signup"><NavLink to="/signup">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </NavLink> Rejestracja </a></li>
                  <li><a href="/card"><NavLink to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </NavLink> Koszyk </a></li>
                </div>
               
                
            </ul>


        </nav>
    );
};

export default SideDrawer;
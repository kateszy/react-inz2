import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus, faShoppingCart, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


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
        <DynamicLoggedComponent cookies={props.cookies} />

      </ul>


    </nav>
  );
};

const DynamicLoggedComponent = props => {
  if (props.cookies.get("token")) {
    return (
      <div className="reverse">
        <li><a href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />Koszyk
          </a>
        </li>
        <li><a href="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} />Wyloguj
        </a>
        </li>
      </div>
    )
  } else {
    return (
      <div className="reverse">
        <li><a href="/login">
          <FontAwesomeIcon icon={faUser} />Logowanie
        </a></li>
        <li><a href="/signup">
          <FontAwesomeIcon icon={faUserPlus} />Rejestracja
        </a></li>
        <li><a href="/card">
          <FontAwesomeIcon icon={faShoppingCart} />Koszyk
        </a></li>
      </div>

    )
  }
}
export default SideDrawer;
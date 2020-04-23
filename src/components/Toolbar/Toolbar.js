import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { Container, Col, Row } from 'react-bootstrap';
import { faHome, faShoppingCart, faUser, faUserPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Toolbar extends Component {

  render() {
  return (
    <Container>
      <Row>
        <header className="toolbar">
          <nav className="toolbar_nav">
            <div className="toolbar_button">
              <DrawerButton click={this.props.clickHandler} />
            </div>
            <Col>
              <div className="toolbar_nav-items">
                <ul id="navigation">
                  <li><a href="/"> <FontAwesomeIcon icon={faHome} /> </a></li>
                  <li> <a href="/products"> Produkty</a> </li>
                  <ul className="dropdown">
                    <li> Kategorie

                    <ul>
                        <li><a href="/products/hats"> Czapki </a></li>
                        <li><a href="/products/shoes"> Buty </a></li>
                        <li><a href="/products/trousers"> Spodnie </a></li>
                        <li><a href="/products/tshirts"> Koszulki</a></li>
                      </ul>

                    </li>
                    <li> Marki

                    <ul>
                        <li><a href="/brand/adidas"> Adidas </a></li>
                        <li><a href="/brand/nike"> Nike </a></li>
                        <li><a href="/brand/converse"> Converse </a></li>
                        <li><a href="/brand/vans"> Vans </a></li>
                        <li><a href="/brand/newBalance"> New Balance </a></li>
                      </ul>

                    </li>


                  </ul>
                </ul>

              </div>
            </Col>
            <div className="toolbar_nav-items-right" >
              <Col xs lg="1">
                <ToolbarRight cookies={this.props.cookies} />
              </Col>
            </div>

          </nav>
        </header>

      </Row>
    </Container>


  );
};
}
const ToolbarRight = props => {
  if (props.cookies.get("token")) {
    return (
      <ul>
        <li>
          <CartToolbar />
        </li>
        <li><NavLink to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink></li>
      </ul>
    )
  } else {
    return (
      <ul>
        <li><CartToolbar /></li>
        <li><NavLink to="/signup">
          <FontAwesomeIcon icon={faUserPlus} />
        </NavLink></li>
        <li><NavLink to="/login">
          <FontAwesomeIcon icon={faUser} />
        </NavLink></li>
      </ul>
    )
  }
}

const CartToolbar = props => {
  var cartAmount = 0
  if(JSON.parse(localStorage.getItem('cart'))){
    cartAmount = JSON.parse(localStorage.getItem('cart')).length
  }
  return (
    <div className="cartit">
      <ul>
      <li>
    <NavLink to="/cart">
    <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon> 
    </NavLink>
    </li>
    <li>
    <sup>{cartAmount}</sup></li>
    </ul>
    </div>
  )
}

export default Toolbar;
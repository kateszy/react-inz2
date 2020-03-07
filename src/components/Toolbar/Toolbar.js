import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { Container, Col, Row } from 'react-bootstrap';
import { faHome, faShoppingCart, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = props => {


  return (


    <Container>

      <Row>
        <header className="toolbar">

          <nav className="toolbar_nav">
            <div className="toolbar_button">
              <DrawerButton click={props.clickHandler} />
            </div>
            <Col>
              <div className="toolbar_nav-items">
                <ul id="navigation">
                  <li><NavLink to="/" exact> <FontAwesomeIcon icon={faHome} /> </NavLink></li>
                  <li> <NavLink to="/products"> Produkty</NavLink> </li>
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


                  <li><NavLink to="/promotions"> Promocje </NavLink></li>
                </ul>

              </div>
            </Col>


            <div className="toolbar_nav-items-right" >
              <Col xs lg="1">

                <ul>
                  <li><NavLink to="/signup">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </NavLink></li>
                  <li><NavLink to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </NavLink></li>

                  <li><NavLink to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </NavLink></li>

                </ul>

              </Col>
            </div>
          </nav>
        </header>

      </Row>
    </Container>


  );
};

export default Toolbar;
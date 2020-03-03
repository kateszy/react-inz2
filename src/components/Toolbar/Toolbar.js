import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import { faHome, faShoppingCart, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Toolbar = props => {


  return (


    <Container>

      <Row>
        <header className="toolbar">

          <nav className="toolbar_nav">

            <Col>
              <div className="toolbar_button">
                <DrawerButton click={props.clickHandler} />
              </div>

              <div className="toolbar_nav-items">
                <ul id="navigation">
                  <li><NavLink to="/" exact> <FontAwesomeIcon icon={faHome} /> </NavLink></li>
                  <li> <NavLink to="/cart"> Produkty</NavLink> </li>
                  <ul className="dropdown">
                  <li> Kategorie

                    <ul>
                      <li><a href="#"> Czapki </a></li>
                      <li><a href="#"> Buty </a></li>
                      <li><a href="#"> Spodnie </a></li>
                      <li><a href="#"> Bluzy</a></li>
                    </ul>
                    
                  </li>
                  <li> Marki

                    <ul>
                      <li><a href="#"> Adidas </a></li>
                      <li><a href="#"> Nike </a></li>
                      <li><a href="#"> Converse </a></li>
                      <li><a href="#"> Vans </a></li>
                      <li><a href="#"> New Balance </a></li>
                    </ul>
                    
                  </li>


                  </ul>
                  
               
                  <li><NavLink to="/promotions"> Promocje </NavLink></li>
                </ul>
               
              </div>
            </Col>



            <Col xs lg="1">
              <div className="toolbar_nav-items-right" >
                <ul>

                  <li><NavLink to="/login">
                    <FontAwesomeIcon icon={faUser} />
                  </NavLink></li>

                  <li><NavLink to="/cart">  <FontAwesomeIcon icon={faShoppingCart} /> </NavLink></li>

                </ul>
              </div>
            </Col>
          </nav>
        </header>

      </Row>
    </Container>


  );
};

export default Toolbar;
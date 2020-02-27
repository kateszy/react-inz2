import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { Container, Col, Row } from 'react-bootstrap';
import { faHome, faShoppingCart, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBox from '../SearchBox/SearchBox';
import SearchBoxAnimation from '../SearchBox/SearchBoxAnimation';




const ExpandingSearchBox = SearchBoxAnimation(SearchBox);

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
                  <ul>
                    <li><NavLink to="/" exact> <FontAwesomeIcon icon={faHome} /> </NavLink></li>
                    <li><NavLink to="/category"> Kategorie </NavLink></li>
                    <li><NavLink to="/brands"> Marki </NavLink></li>
                    <li><NavLink to="/promotions"> Promocje </NavLink></li>
                  </ul>
                </div>
              </Col>

              <Col md="auto">
                <div className="search">
                  {/* <Form inline>
       <FormControl type="text" placeholder="Szukaj" className="mr-sm-2" />
       <Button variant="outline-info"> <FontAwesomeIcon icon={faSearch} /> </Button>
       </Form> */}

                  <ExpandingSearchBox/>

                </div>
              </Col>

              <Col xs lg="1">
                <div className="toolbar_nav-items-right" >
                  <ul>
                  <li><NavLink to="/fav">  <FontAwesomeIcon icon={faHeart} /> </NavLink></li>
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
import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { render } from '@testing-library/react';
import {Form,FormControl,Button,Container,Col,Row} from 'react-bootstrap';
import { faHome, faShoppingCart, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => <h1> Strona startowa </h1>;
const Category = () => <h1> Kategorie </h1>;
const Brands = () => <h1> Marki  </h1>;
const Promotions = () => <h1> Promocje </h1>;
const Login = () => <h1> Login </h1>;
const Cart = () => <h1> Koszyk </h1>;
const ErrorPage = () => <h1> Strona nie istnieje  </h1>

const Toolbar = props => {

return (
<Container>
    <Row>
    <header className="toolbar">
        <Router>
        
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
       <Form inline>
       <FormControl type="text" placeholder="Szukaj" className="mr-sm-2" />
       <Button variant="outline-info"> <FontAwesomeIcon icon={faSearch} /> </Button>
       </Form>
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
    
   
        <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/brands" component={Brands}/>
        <Route path="/promotions" component={Promotions}/>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart}/>
        <Route component ={ErrorPage}/>
        </Switch>
     
      </Router>
      </header>
      </Row>
      </Container>
);
};

export default Toolbar;
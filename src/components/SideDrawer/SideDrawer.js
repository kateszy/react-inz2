import React from 'react';
import './SideDrawer.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faGift, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {Form,FormControl} from 'react-bootstrap';


// const Home = () => {};
const Category = () => <h1> Kategorie </h1>;
const Brands = () => <h1> Marki  </h1>;
const Promotions = () => <h1> Promocje </h1>;

const Cart = () => <h1> Koszyk </h1>;

// const ErrorPage = () => <h1> Strona nie istnieje  </h1>
const SideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if(props.show){
        drawerClasses ='side_drawer open';
    }
    
    return (
        <Router>
    <nav className={drawerClasses}>         
       <ul>
        <li><NavLink to="/search"> <Form inline>
    <FormControl type="text" placeholder="Czego szukasz?" className=" mr-sm-2" /></Form> </NavLink></li>
        <li><NavLink to="/" exact> Produkty </NavLink></li>
        <li><NavLink to="/category"> Kolekcje </NavLink></li>
        <li><NavLink to="/brands"> Marki </NavLink></li>
        <li><NavLink to="/promotions"><FontAwesomeIcon icon={faGift} /> Promocje </NavLink></li>
        <li><NavLink to="/login"> <FontAwesomeIcon icon={faUser} /> Logowanie <FontAwesomeIcon icon={faLongArrowAltRight} size="sm" /> </NavLink></li>        
        </ul>
       
    </nav>
   

    
        <Switch> 
        <Route path="/search" component={Category}/>    
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/category" component={Category}/>
        <Route path="/brands" component={Brands}/>
        <Route path="/promotions" component={Promotions}/>
        
        <Route path="/cart" component={Cart}/>
        {/* <Route component ={ErrorPage}/> */}
        </Switch>
    </Router>
    );
    };

export default SideDrawer;
import React from 'react';
import './SideDrawer.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faGift, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {Form,FormControl} from 'react-bootstrap';





// const ErrorPage = () => <h1> Strona nie istnieje  </h1>
const SideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if(props.show){
        drawerClasses ='side_drawer open';
    }
    
    return (
    <nav className={drawerClasses}>         
       <ul>
        <li><NavLink to="/" exact> Produkty </NavLink></li>
        <li><NavLink to="/brand"> Marki </NavLink></li>
        <li><NavLink to="/promotions"><FontAwesomeIcon icon={faGift} /> Promocje </NavLink></li>
        <li><NavLink to="/login"> <FontAwesomeIcon icon={faUser} /> Logowanie <FontAwesomeIcon icon={faLongArrowAltRight} size="sm" /> </NavLink></li>        
        </ul>
       
    </nav>
    );
    };

export default SideDrawer;
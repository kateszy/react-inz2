import React from 'react';
import './SideDrawer.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

const Home = () => <h1> Strona startowa </h1>;
const Category = () => <h1> Kategorie </h1>;
const Brands = () => <h1> Marki  </h1>;
const Promotions = () => <h1> Promocje </h1>;
const Login = () => <h1> Login </h1>;
const Cart = () => <h1> Koszyk </h1>;

const ErrorPage = () => <h1> Strona nie istnieje  </h1>
const SideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if(props.show){
        drawerClasses ='side_drawer open';
    }
    
    return (
        <Router>
    <nav className={drawerClasses}>         
       <ul>
        <li><NavLink to="/" exact> Home </NavLink></li>
        <li><NavLink to="/category"> Kategorie </NavLink></li>
        <li><NavLink to="/brands"> Marki </NavLink></li>
        <li><NavLink to="/promotions"> Promocje </NavLink></li>
        <li><NavLink to="/login"> Logowanie </NavLink></li>
        <li><NavLink to="/cart"> Koszyk </NavLink></li>
        </ul>


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
    );
    };

export default SideDrawer;
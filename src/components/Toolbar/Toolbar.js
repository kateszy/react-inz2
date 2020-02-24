import React from 'react';
import './Toolbar.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

const Home = () => <h1> Strona startowa </h1>;
const Category = () => <h1> Kategorie </h1>;
const Brands = () => <h1> Marki  </h1>;
const Promotions = () => <h1> Promocje </h1>;
const Login = () => <h1> Login </h1>;
const Cart = () => <h1> Koszyk </h1>;

const ErrorPage = () => <h1> Strona nie istnieje  </h1>
const toolbar = props => (

<Router>
 
    <header className="toolbar">
        <nav className="toolbar_nav">
        <div className="toolbar_logo"><a href="/"> THE LOGO </a></div>        
        <div className="toolbar_nav-items">    
        <ul>
        <li><NavLink to="/" exact> Home </NavLink></li>
        <li><NavLink to="/category"> Kategorie </NavLink></li>
        <li><NavLink to="/brands"> Marki </NavLink></li>
        <li><NavLink to="/promotions"> Promocje </NavLink></li>
        
        </ul>
        </div>
        <div className="spacer"/>
        <div className="toolbar_nav-itemsright">
        <ul>
        <li><NavLink to="/login"> Logowanie </NavLink></li>
        <li><NavLink to="/cart"> Koszyk </NavLink></li>
        </ul>

        </div>
        </nav>
    </header>

    <section>
        <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/brands" component={Brands}/>
        <Route path="/promotions" component={Promotions}/>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={Cart}/>
        <Route component ={ErrorPage}/>
        </Switch>
      </section>
      </Router>
);

export default toolbar;
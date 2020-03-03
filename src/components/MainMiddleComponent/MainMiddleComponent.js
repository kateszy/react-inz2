import React from 'react';
import Home from '../Home/Home'
import Login from '../Login/Login'
import {Route, Switch } from 'react-router-dom';



const ErrorPage = () => <h1> Strona nie istnieje  </h1>
const Category = () => <h1> Kategorie </h1>;
const Brands = () => <h1> Marki  </h1>;
const Promotions = () => <h1> Promocje </h1>;
const Cart = () => <h1> Koszyk </h1>;
const MainMiddleComponent = props => {
    return(      
     <Switch>
        <Route path="/" exact component={Home} />
      
        <Route path="/brands" component={Brands} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route component={ErrorPage} />
      </Switch>
    );


};



export default MainMiddleComponent;



import React from 'react';
import Home from '../Home/Home'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Logout from '../Auth/Logout'
import Products from '../Products/Products'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Summary from '../Cart/Summary'
import ErrorPage from '../ErrorPage/ErrorPage'
import {Route, Switch, withRouter } from 'react-router-dom';

const MainMiddleComponent = props => {
    const {cookies} = props;
    return(      
     <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/brand" component={withRouter(props => <Products {...props}/>)} />
        <Route path="/login" component={props => <Login cookies={cookies} {...props}/>} />
        <Route path="/signup" component={SignUp} />
        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={props => <Cart cookies={cookies} {...props}/>} />
        <Route path="/products/p" component={withRouter(props => <Product {...props}/>)} />
        <Route path="/products" component={withRouter(props => <Products {...props}/>)} />
        <Route path="/summary" component={props => <Summary cookies={cookies} {...props}/>} />
        <Route component={ErrorPage} />
      </Switch>
    );
};



export default MainMiddleComponent;



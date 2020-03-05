import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import MainMiddleComponent from './components/MainMiddleComponent/MainMiddleComponent';
import Footer from './components/Footer/Footer';
import Cookie from "js-cookie"

class App extends Component {

  
  state = {
    sideDrawerOpen: false,
    token: Cookie.get("token")
  };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };

    });

  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });


  }
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
    
      <MuiThemeProvider>
        <Router>
          <Toolbar clickHandler={this.sideDrawerHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <MainMiddleComponent token={this.state.token}/>
          <Footer/>
        </Router>
        
      </MuiThemeProvider>
     
    );
  }
}

export default App;

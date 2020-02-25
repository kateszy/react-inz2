import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerButton from './components/SideDrawer/DrawerButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {

  state = {
    sideDrawerOpen: false

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
        <div style={{ height: '100%' }}>
          <Toolbar clickHandler={this.sideDrawerHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '64px' }}>
            <p> jdsnnd </p>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

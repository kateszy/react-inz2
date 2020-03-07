import React, { Component } from 'react';
import Cookie from "js-cookie"

class Logout extends Component {

  componentWillMount(){
        Cookie.remove("token");
        window.location = '/';
      }

  render() {
    return (
        <div></div>
    );
  }

};
export default Logout;
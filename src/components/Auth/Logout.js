import React, { Component } from 'react';
import Cookie from "js-cookie"

class Logout extends Component {

  componentWillMount(){
    if(Cookie.get("token")){
        Cookie.set("token",null);
        window.location.replace("http://localhost:3000/");
    }
  }

  render() {
    return (
        <div></div>
    );
  }

};
export default Logout;
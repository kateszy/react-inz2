import React, { Component } from 'react';
import './Summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave} from "@fortawesome/free-solid-svg-icons";

class Summary extends Component {
  
  componentDidMount(){
    localStorage.removeItem('cart');
    const token = this.props.cookies.get("token")
    if(!token){
      window.location = '/login';
    }
  }

  render() {
    return (
      
      <div className="Summary">
      <FontAwesomeIcon icon={faMoneyBillWave} size="4x"/>
         <p> Prosimy o przelew:  {this.props.cookies.get("sumPrice")} zł na numer konta: 00 0000 0000 0000 0000 </p>
        
        <p> TWOJE DANE</p>
        <p> Imie i nazwisko: {this.props.cookies.get("name")}  </p>
        <p> Ulica: {this.props.cookies.get("street")} </p> 
        <p> Miasto: {this.props.cookies.get("city")} </p> 
        <p> Kod pocztowy: {this.props.cookies.get("zipcode")}  </p>
         
       
      </div>
     

    );
  }

};
export default Summary;
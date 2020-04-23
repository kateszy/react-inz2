import React from 'react';
import './ErrorPage.css';
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorPage = props => {

    return (

        <div className="ErrorPage">
             <FontAwesomeIcon icon={faCat} size="4x"> </FontAwesomeIcon> 
            <p>Strona nie istnieje! </p>
            </div>
        );

    };

    
export default ErrorPage;
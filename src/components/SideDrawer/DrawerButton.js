import React from 'react';
import './DrawerButton.css';

const DrawerButton = props => (

    <button className="button_class" onClick={props.click}>
        <div className="button_line"/>
        <div className="button_line"/>
        <div className="button_line"/>

    </button>

);

export default DrawerButton;

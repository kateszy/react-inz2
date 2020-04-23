import React from 'react';
import { Col } from 'react-bootstrap';
import './BrandsBar.css';

function BrandsBar({ link, image }) {

    return (
        <Col xs lg="2" className="BrandCol"><a href={link}><img src={image} /></a></Col>

    );

};



export default BrandsBar;
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import nike from '../images/nike.png';
import adidas from '../images/adidas.jpg';
import converse from '../images/converse.png';
import vans from '../images/vans.jpg';
import newb from '../images/newb.png';
import infinity from '../images/infinity.jpg';

import './BrandsBar.css';

const BrandsBar = props => {

    return( 

        <Container className="Brands">
            <Row>
                <Col xs lg="2" className="BrandCol"><img src={adidas} /></Col>
                <Col xs lg="2" className="BrandCol"><img src={nike} /></Col>                
                <Col xs lg="2" className="BrandCol"><img src={converse} /></Col>
                <Col xs lg="2" className="BrandCol"><img src={vans} /></Col>
                <Col xs lg="2" className="BrandCol"><img src={newb} /></Col>
                <Col xs lg="2" className="BrandCol"><img src={infinity} /></Col>
                
        
            </Row>
        </Container>

);

};



export default BrandsBar;
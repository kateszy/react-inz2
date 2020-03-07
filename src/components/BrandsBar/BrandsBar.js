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
                <div className="Brandsflex">
                <Col xs lg="2" className="BrandCol"><a href="/brand/adidas"><img src={adidas} /></a></Col>
                <Col xs lg="2" className="BrandCol"><a href="/brand/nike"><img src={nike} /></a></Col>                
                <Col xs lg="2" className="BrandCol"><a href="/brand/converse"><img src={converse} /></a></Col>
                <Col xs lg="2" className="BrandCol"><a href="/brand/vans"><img src={vans} /></a></Col>
                <Col xs lg="2" className="BrandCol"><a href="/brand/newBalance"><img src={newb} /></a></Col>
                <Col xs lg="2" className="BrandCol"><a href="/products"><img src={infinity} /></a></Col>
                </div>
        
            </Row>
        </Container>

);

};



export default BrandsBar;
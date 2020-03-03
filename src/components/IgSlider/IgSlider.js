import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './IgSlider.css';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';
import i6 from '../images/i6.jpg';

const IgSlider = props => {

    return( 

        <Container className="IgSldr">
            <Row>
                <Col xs lg="2" className="IgCol"><img src={i1} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i2} /></Col>                
                <Col xs lg="2" className="IgCol"><img src={i3} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i4} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i5} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i6} /></Col>        
            </Row>            
            <div><h1>Dołącz do nas!</h1></div>
            <Row>
                <Col xs lg="2" className="IgCol"><img src={i6} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i5} /></Col>                
                <Col xs lg="2" className="IgCol"><img src={i4} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i3} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i2} /></Col>
                <Col xs lg="2" className="IgCol"><img src={i1} /></Col>
                
        
            </Row>
        </Container>

);

};



export default IgSlider;
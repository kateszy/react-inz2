import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import './CategoriesImgBar.css'

const CategoriesImgBar = props => {

    return(   
       <Container className="mw100">            
            <Row> 
           
                <Col xs lg="3" className="mw100"> <img class="imageMax" src={g4} /></Col>
                <Col xs lg="3" className="mw100"> <img class="imageMax" src={g2} /></Col>
                <Col xs lg="3" className="mw100"><img class="imageMax" src={g3} /></Col>
                <Col xs lg="3" className="mw100"> <img class="imageMax" src={g1} /></Col>
               
            </Row>            
        </Container>

);


};

export default CategoriesImgBar;
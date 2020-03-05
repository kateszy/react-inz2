import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import './CategoriesImgBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


const CategoriesImgBar = props => {

    return (
        <Container className="mw100">
            <Row>

                <Col xs lg="3" className="mw200"> <a href="/products/hats"><img className="cat" src={g4} /> <h2> Czapki </h2> <small> shop <FontAwesomeIcon icon={faLongArrowAltRight} color="rgb(202, 255, 202)" ho className="arrow"/></small></a> </Col>
                <Col xs lg="3" className="mw200"> <a href="/products/shoes"><img className="cat" src={g2} /> <h2> Buty </h2><small> shop <FontAwesomeIcon icon={faLongArrowAltRight} color="rgb(202, 255, 202)" className="arrow"/></small></a></Col>
                <Col xs lg="3" className="mw200"><a href="/products/trousers"><img className="cat" src={g3} /> <h2> Spodnie </h2><small> shop <FontAwesomeIcon icon={faLongArrowAltRight} color="rgb(202, 255, 202)" className="arrow"/></small></a></Col>
                <Col xs lg="3" className="mw200"> <a href="/products/tshirt"><img className="cat" src={g1} /> <h2> Bluzy </h2><small> shop <FontAwesomeIcon icon={faLongArrowAltRight} color="rgb(202, 255, 202)"className="arrow" /></small></a></Col>

            </Row>
        </Container>

    );


};

export default CategoriesImgBar;
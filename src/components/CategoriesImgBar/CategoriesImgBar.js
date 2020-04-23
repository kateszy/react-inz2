import React from 'react';
import { Col } from 'react-bootstrap';
import './CategoriesImgBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";


function CategoriesImgBar({ link, image, header }) {

    return (
        <Col xs lg="3" className="mw200"> <a href={link}><img className="cat" src={image} /> <h2> {header} </h2> <small> shop <FontAwesomeIcon icon={faLongArrowAltRight} color="rgb(202, 255, 202)" className="arrow" /></small></a> </Col>

    );


};

export default CategoriesImgBar;
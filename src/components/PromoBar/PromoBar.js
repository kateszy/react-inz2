import React from 'react';
import { Col } from 'react-bootstrap';
import './PromoBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PromoBar({ icon, header, paragraph }) {
    return (
        <Col xs lg="3" className="PromoCol">
            <FontAwesomeIcon icon={icon} size="3x" />
            <h4> {header} </h4>
            <p> {paragraph}
            </p>
        </Col>
    );};
export default PromoBar;
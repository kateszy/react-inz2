import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faMobileAlt, faEnvelope, faHashtag, faBell, faVideo}  from "@fortawesome/free-solid-svg-icons";

const Footer = props => {

    return( 

        <Container className="Footer-items">
            <Row>
                <Col xs lg="4" className="FtCol">
                <h5> Kontakt </h5>
                    
                        <div id="footer-it1">
                   <FontAwesomeIcon icon={faPhoneVolume} size="2x" /></div>
                   <div id="footer-it2">
                    <h6> Telefon:</h6>
                    <p> 00 000 00 00 </p>
                    </div>
                    
                    <div id="footer-it1">
                    <FontAwesomeIcon icon={faMobileAlt} size="2x" /> </div>

                    <div id="footer-it2">
                    <h6> Kom. </h6>
                    <p> +00 000 000 000</p> </div>

                    <div id="footer-it1">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" /> </div>

                    <div id="footer-it2">
                    <h6> E-mail </h6>
                    <p>  kontak@mail.com </p>
                    </div>

                </Col>
                <Col xs lg="4" className="FtCol">
                <h5> Informacja i pomoc </h5>
                <p> Informacja </p>
                <p> Pomoc </p>
                <p> Regulamin </p>
                <p> Współpraca </p>
                <p> O nas </p>
                </Col>                
                <Col xs lg="4" className="FtCol">
                <h5> Społeczność </h5>
                <p> Dołącz do nas! </p>
                <FontAwesomeIcon icon={faHashtag} size="2x" id="media" />
                <FontAwesomeIcon icon={faBell} size="2x" id="media" />
                <FontAwesomeIcon icon={faVideo} size="2x" id="media"/>
                
                
                
               
                </Col>   
            </Row>
        </Container>

);

};



export default Footer;
import React from 'react';
import { Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faBell, faVideo } from "@fortawesome/free-solid-svg-icons";

const Footer = props => {

    return (

        <div className="FooterFlex">
            <Col xs lg="4" className="FtCol">
                <p class="ftitem-top"> Informacje </p>
                <p className="ftitem-bottomtwo"> Regulamin </p>
                <p className="ftitem-bottomtwo">  Współpraca </p>
                <p className="ftitem-bottomtwo">  Pomoc </p>
                <p className="ftitem-bottomtwo">  O nas  </p>


            </Col>


            <Col xs lg="4" className="FtCol">
                <p className="logo"> OUTLETLLY </p>
                <FontAwesomeIcon icon={faHashtag} size="2x" id="media" />
                <FontAwesomeIcon icon={faBell} size="2x" id="media" />
                <FontAwesomeIcon icon={faVideo} size="2x" id="media" />

                <div className="about">
                    <p className="aboutitems"> Made in Poland </p>
                    <p className="ftitem-bottom"> with love </p>

                </div>


            </Col>

            <Col xs lg="4" className="FtCol">
                <p className="ftitem-top"> Kontakt </p>

                <p className="ftitem-bottom"> Telefon </p>
                <p> +00 000 000 000</p>


                <p className="ftitem-bottom"> E-mail </p>
                <p>  kontakt@mail.com </p>

            </Col>
        </div>




    );

};



export default Footer;
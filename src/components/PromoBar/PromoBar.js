import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './PromoBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faTruck, faTags, faUndo } from "@fortawesome/free-solid-svg-icons";

const PromoBar = props => {

    return (

        <Container className="Promo">
            <Row>
            <div className="Promoflex">
                <Col xs lg="3" className="PromoCol">  <FontAwesomeIcon icon={faCoins} size="3x" />
                    <h4> Program lojalnościowy </h4>
                    <p> SuperClub to nasz program lojalnościowy! Skontaktuj sie z nami mailowo 
                    </p>
                </Col>
                <Col xs lg="3" className="PromoCol"> <FontAwesomeIcon icon={faTruck} size="3x"/>
                    <h4> Darmowa wysyłka w 24H </h4>
                    <p> Do wszystkich zamówień oferujemy wysyłkę kurierem GRATIS w ciągu 24h.
                      </p>
                </Col>
                <Col xs lg="3" className="PromoCol"> <FontAwesomeIcon icon={faTags} size="3x" />
                    <h4> Gwarancja najniższej ceny! </h4>
                    <p> Jeśli udałoby Ci się znaleźć dokładnie ten sam produkt w innym sklepie, w niższej cenie - obniżymy jego cenę!
                    </p>
                </Col > 
                <Col xs lg="3" className="PromoCol"> <FontAwesomeIcon icon={faUndo} size="3x"/><h4> 14 dni na zwrot zakupów </h4>
                    <p> Na zwrot zakupionych produktów masz 14 dni licząc od daty otrzymania przesyłki.
                    </p></Col>
            </div>
            </Row>
        </Container>

    );

};



export default PromoBar;
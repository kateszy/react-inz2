import React from 'react';
import BrandsBar from '../BrandsBar/BrandsBar';
import CategoriesImgBar from '../CategoriesImgBar/CategoriesImgBar';
import PromoBar from '../PromoBar/PromoBar';
import IgSlider from '../IgSlider/IgSlider';
import { faCoins, faTruck, faTags, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import nike from '../images/nike.png';
import adidas from '../images/adidas.jpg';
import converse from '../images/converse.png';
import vans from '../images/vans.jpg';
import newb from '../images/newb.png';
import infinity from '../images/infinity.jpg';


const Home = props => {

    return (

        <div>

            <Container className="mw100">
                <div className="Catflex">
                    <CategoriesImgBar
                        link="/products/hats"
                        image={g4}
                        header="Czapki "
                    />
                    <CategoriesImgBar
                        link="/products/shoes"
                        image={g2}
                        header="Buty "
                    />
                    <CategoriesImgBar
                        link="/products/trousers"
                        image={g3}
                        header="Spodnie "
                    />
                    <CategoriesImgBar
                        link="/products/tshirts"
                        image={g1}
                        header="Bluzy "
                    />




                </div>


            </Container>


            <Container className="Promo">
                <div className="Promoflex">


                    <PromoBar
                        icon={faCoins}
                        header="Program lojalnościowy"
                        paragraph=" SuperClub to nasz program lojalnościowy! Skontaktuj sie z nami mailowo "

                    />
                    <PromoBar
                        icon={faTruck}
                        header="Darmowa wysyłka w 24H"
                        paragraph=" Do wszystkich zamówień oferujemy wysyłkę kurierem GRATIS w ciągu 24h. "

                    />
                    <PromoBar
                        icon={faTags}
                        header="Gwarancja najniższej ceny!"
                        paragraph=" Jeśli udałoby Ci się znaleźć dokładnie ten sam produkt w innym sklepie, w niższej cenie - obniżymy jego cenę! "

                    />
                    <PromoBar
                        icon={faUndo}
                        header="14 dni na zwrot zakupów"
                        paragraph=" Na zwrot zakupionych produktów masz 14 dni licząc od daty otrzymania przesyłki "

                    />

                </div>

            </Container>

            <Container className="Brands">
                <div className="Brandsflex">
                    <BrandsBar
                        link="/brand/adidas"
                        image={adidas}
                    />
                    <BrandsBar
                        link="/brand/nike"
                        image={nike}
                    />
                    <BrandsBar
                        link="/brand/converse"
                        image={converse}
                    />
                    <BrandsBar
                        link="/brand/vans"
                        image={vans}
                    />
                    <BrandsBar
                        link="/brand/newBalance"
                        image={newb}
                    />
                    <BrandsBar
                        link="/products"
                        image={infinity}
                    />



                </div>
            </Container>



            <IgSlider />

        </div>

    );


};



export default Home;



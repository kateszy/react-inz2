import React from 'react';
import BrandsBar from '../BrandsBar/BrandsBar';
import CategoriesImgBar from '../CategoriesImgBar/CategoriesImgBar';
import PromoBar from '../PromoBar/PromoBar';
import IgSlider from '../IgSlider/IgSlider';
import Footer from '../Footer/Footer';


const Home = props => {

    return(      

        <div>
        <CategoriesImgBar/>   
        <PromoBar/>   
        <BrandsBar/>
        <IgSlider/>
        <Footer/>
        </div>

    );


};



export default Home;



import React from 'react';
import BrandsBar from '../BrandsBar/BrandsBar';
import CategoriesImgBar from '../CategoriesImgBar/CategoriesImgBar';
import PromoBar from '../PromoBar/PromoBar';


const Home = props => {

    return(      

        <div>
        <CategoriesImgBar/>   
        <PromoBar/>   
        <BrandsBar/>
        </div>

    );


};



export default Home;



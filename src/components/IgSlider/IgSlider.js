import React from 'react';
import './IgSlider.css';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';
import i5 from '../images/i5.jpg';



const IgSlider = props => {

    return (

        <div className="gallery-section">
            <div className="inner-width">
                <div className="followus"> <h1>#OUTLETLLY</h1> <p> Dołącz do nas i dodaj zdjęcie z hashtagiem  </p> </div>
                <div class="gallery">
                    <div className="igimage"><img src={i1} /></div>
                    <div className="igimage"><img src={i2} /></div>
                    <div className="igimage"><img src={i3} /></div>
                    <div className="igimage"><img src={i4} /> </div>
                    <div className="igimage"><img src={i4} /></div>
                    <div className="igimage"><img src={i5} /></div>
                    <div className="igimage"><img src={i1} /></div>
                    <div className="igimage"><img src={i2} /></div>


                </div>
            </div>
        </div>

    );

};



export default IgSlider;
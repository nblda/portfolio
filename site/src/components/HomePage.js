import React from 'react';

import Hero from './Hero.js'
import Carousel from './Carousel.js'



function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>;
            <Carousel />
        </div>
    );
}

export default HomePage;
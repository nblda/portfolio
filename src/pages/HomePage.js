import React from 'react';

import Hero from '../components/Hero.js';
import NavArrow from '../components/NavArrow';



function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <NavArrow side="right" to="/stack"/>
        </div>
    );
}

export default HomePage;
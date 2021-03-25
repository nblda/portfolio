import React from 'react';

import Hero from '../components/Hero.js';
import NavArrow from '../components/NavArrow';
import nico from '../assets/images/nico.png'

import Icons from '../components/Icons';



function HomePage(props){
    return(
        <div>
            <container className="homeContainer d-flex flex-wrap-reverse justify-content-center">
                <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
                <img className="photoHome" src={nico} alt="Nicolas" height="250px"></img>
            </container>
            <Icons className="homeIcons" cv="true" email="true" linkedin="true"></Icons>
            <NavArrow side="right" to="/stack"/>

        </div>
    );
}

export default HomePage;
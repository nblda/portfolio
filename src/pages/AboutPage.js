import React from 'react';
import Hero from '../components/Hero.js';
// import Content from '../components/Content.js';
import NavArrow from '../components/NavArrow';
import AboutGrid from '../components/AboutGrid';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} titleClassName="heroTitle" text={props.text} />

            <NavArrow side="left" to="/projects"/>
            <NavArrow side="right" to="/contact"/>
            <AboutGrid></AboutGrid>
        </div>
    );
}

export default AboutPage;
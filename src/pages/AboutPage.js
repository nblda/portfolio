import React from 'react';
import Hero from '../components/Hero.js';
import Content from '../components/Content.js';
import NavArrow from '../components/NavArrow';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <NavArrow side="left" to="/projects"/>
            <NavArrow side="right" to="/contact"/>

            <Content>
                Hello
            </Content>
        </div>
    );
}

export default AboutPage;
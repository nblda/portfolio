import React from 'react';
import Hero from './Hero.js';
import Content from './Content.js';
function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                Hello
            </Content>
        </div>
    );
}

export default AboutPage;
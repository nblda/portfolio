import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../styles.css'

import Content from './Content';
import AboutCard from './AboutCard.js';

import image1 from '../assets/images/projects/image1.png';
import image2 from '../assets/images/projects/image2.png';
import image3 from '../assets/images/projects/image3.png';
import basket from '../assets/images/about/basket.jpeg';


class AboutGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            aboutTxt : 'Hi there! I\'am Nicolas, an industrial IT engineer. I just graduated after 5 years of work study',
            items : [
                {
                    id: 0,
                    title: 'Basketball',
                    subTitle: 'I began Basketball at 7 and never stopped since. I have played at a national and regional level. I am trully pationate about basketball',
                    imgSrc: basket,
                    selected: true     
                },
                {
                    id: 1,
                    title: 'Sports outings',
                    subTitle: 'What\'s better by a sunny day than playing all kinds of sports with friends like Spikeball, table tennis, football, volleyball...',
                    imgSrc: image2,
                    selected: false     
                },
                {
                    id: 2,
                    title: 'Reflexion games',
                    subTitle: 'Raining week-ends can be awesome too with either escape games or boardgames!',
                    imgSrc: image3,
                    selected: false     
                },
                {
                    id: 3,
                    title: 'Guitar',
                    subTitle: 'I have played guitar for 7 years when I was 7. I am trying getting back into it but I lost so much level !',
                    imgSrc: image1,                  
                    selected: false     
                },
                {
                    id: 4,
                    title: '3D Printing/Arduino',
                    subTitle: 'I like solving ponctual problems with 3D prints or small electroniq editings like replacing small broken plastic pieces or a sort of alarm system.',
                    imgSrc: image3,                   
                    selected: false     
                },
                {
                    id: 5,
                    title: 'Cooking',
                    subTitle: 'I have recently discovered that vegetables were awesome. Since that I love cooking and discover more and more recipes!',
                    imgSrc: image3,                   
                    selected: false     
                },
            ]
        };
    }

    makeItems = (items) => {
        return items.map(item => {
            return <AboutCard item={item} key={item.id}/>
        });
    }

    render(){

        return(
            <Container className="aboutGrid">
                <Row className="justify-content-between">
                        <Col sm={12} lg={6} className="order-lg-6  aboutContent"><Content>{this.state.aboutTxt}</Content></Col>
                        <Col lg={3} md={4} className="order-lg-1 test" sm={6}><AboutCard item={this.state.items[0]} /></Col>
                        <Col lg={3} md={4} className="order-lg-2 test" sm={6}><AboutCard item={this.state.items[1]} /></Col>
                        <Col lg={3} md={4} className="order-lg-3 test" sm={6}><AboutCard item={this.state.items[2]} /></Col>
                        <Col lg={3} md={4} className="order-lg-4 test" sm={6}><AboutCard item={this.state.items[3]} /></Col>
                        <Col lg={3} md={4} className="order-lg-5 test" sm={6}><AboutCard item={this.state.items[4]} /></Col>
                        <Col lg={3} md={4} className="order-lg-7 test" sm={6}><AboutCard item={this.state.items[5]} /></Col>                    
                </Row>
            </Container>
            
        );
    }
}

export default AboutGrid;
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
            aboutTxt : 'Hi there ! I\'m Nicolas an industrial computer science ingineer',
            items : [
                {
                    id: 0,
                    title: 'Basketball',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: basket,
                    selected: true     
                },
                {
                    id: 1,
                    title: 'Sorties sportives',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image2,
                    selected: false     
                },
                {
                    id: 2,
                    title: 'Reflexion games',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,
                    selected: false     
                },
                {
                    id: 3,
                    title: 'Guitare',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image1,                  
                    selected: false     
                },
                {
                    id: 4,
                    title: 'Impression 3D',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,                   
                    selected: false     
                },
                {
                    id: 5,
                    title: 'Cuisine',
                    subTitle: 'vzdcvbezben,rnebz',
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
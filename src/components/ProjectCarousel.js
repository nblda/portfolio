import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-elastic-carousel';

import '../styles.css'

import Card from './Card.js';

import gestock from '../assets/images/projects/gestock.png';
import catalog from '../assets/images/projects/3dcatalog.png';
import dashboard from '../assets/images/projects/dashboard.png';
import maestroom2 from '../assets/images/projects/maestroom2.png';
import estitool from '../assets/images/projects/estitool.png';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2  },
    { width: 990, itemsToShow: 3, itemsToScroll: 3  }
  ];


class ProjectCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            changed : false,
            defaultId : 0,
            items : [
                {
                    id: 0,
                    title: '3D catalog',
                    subTitle: 'An internal catalog to give access to 3D printed after sales parts or tools.',
                    imgSrc: catalog,
                    link: null,
                    techs: ["html", "css", "js"],
                    selected: true     
                },
                {
                    id: 1,
                    title: 'Estitool',
                    subTitle: 'A production cost calculator to validate a product or rework its conception.',
                    imgSrc: estitool,
                    link: null,
                    techs: ["angular", "php", "pgsql"],
                    selected: false     
                },
                {
                    id: 2,
                    title: '3D Prints Dashboard',
                    subTitle: 'A dashboard set up on severall screens to monitore each 3D print process in the lab.',
                    imgSrc: dashboard,
                    link: null,
                    techs: ["react", "js"],
                    selected: false     
                },
                {
                    id: 3,
                    title: 'Gestock',
                    subTitle: 'A stock management tool that works with a QR code scanner. ',
                    imgSrc: gestock,
                    link: null,
                    techs: ["html", "css", "js", "php", "mysql"],
                    selected: false     
                },
                {
                    id: 4,
                    title: 'Maestroom HMI',
                    subTitle: 'Human Machine Interface made on a touchscreen to configure wifi-connexion and monitor datas from sensors.',
                    imgSrc: maestroom2,
                    link: null,
                    techs: ["html", "css", "js", "php", "mysql"],
                    selected: false     
                },
            ]
        };
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id}/>
        });
    }

    render(){

        return(
            <Container>
                <Carousel showArrows={false} breakPoints={breakPoints} focusOnSelect={false}>
                    {this.makeItems(this.state.items)}
                </Carousel>
            </Container>
            
        );
    }
}

export default ProjectCarousel;
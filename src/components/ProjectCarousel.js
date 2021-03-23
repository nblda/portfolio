import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-elastic-carousel';

import '../styles.css'

import Card from './Card.js';

import image1 from '../assets/images/projects/image1.png';
import image2 from '../assets/images/projects/image2.png';
import image3 from '../assets/images/projects/image3.png';


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
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image1,
                    link: 'https://github.com/nblda/portfolio',
                    selected: true     
                },
                {
                    id: 1,
                    title: '3D cotolog',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image2,
                    link: 'https://github.com/nblda/portfolio',
                    selected: false     
                },
                {
                    id: 2,
                    title: '3D cotalog',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,
                    link: null,
                    selected: false     
                },
                {
                    id: 3,
                    title: '3D cot',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,
                    link: null,
                    selected: false     
                },
                {
                    id: 4,
                    title: 'cotalog',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,
                    link: null,
                    selected: false     
                },
                {
                    id: 5,
                    title: '3D',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image3,
                    link: null,
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
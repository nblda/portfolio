import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card.js'

import image1 from '../assets/images/projects/image1.png';
import image2 from '../assets/images/projects/image2.png';
import image3 from '../assets/images/projects/image3.png';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    id: 0,
                    title: '3D catalog',
                    subTitle: 'vzdcvbezben,rnebz',
                    imgSrc: image1,
                    link: 'https://github.com/nblda/portfolio',
                    selected: false     
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

    // handleCardClick = (id, card) => {
    //     console.log(id);
    //     let items = [...this.state.items];

    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item =>{
    //         if(item.id !== id) {
    //             item.selected = false;
    //         }
    //     });

    //     this.setState({
    //         items
    //     });
    // }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={ console.log(item.id)} key={item.id}/>
        });
    }

    render(){
        return(
            <Container>
                <Row className="justify-content-between">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Icons from '../components/Icons';

function Hero(props){
    return(
        <Jumbotron className="hero bg-transparent  p-0 mt-50">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={9} sm={10}>
                        { props.title && <h1 className={props.titleClassName}>{props.title}</h1> }
                        { props.subTitle && <h3 className={props.subTitleClassName}>{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AiOutlineIdcard, AiOutlineLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
// import Col from 'react-bootstrap/Col';

function Icons(props){
    return(
            <Container className={props.className} fluid={false}>
                <Row className="justify-content-center">
                        { props.cv && <AiOutlineIdcard size={35}/> }
                        { props.linkedin && <AiOutlineLinkedin size={35}/> }
                        { props.email && <HiOutlineMail size={35}/> }
                </Row>
            </Container>
    );
}

export default Icons;
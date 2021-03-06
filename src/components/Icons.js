import React, {useState, useRef} from 'react';
import { Overlay } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { AiOutlineIdcard, AiOutlineLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
// import cvAnglais from '../_CV_Belda_Nicolas_english.4c003faa.pdf'

function Icons(props){

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return(
            <Container className={props.className} fluid={false}>
                <Row className="justify-content-center">
                        { props.cv && <a className="link" href="https://drive.google.com/file/d/1IrRTHyPFjPmzdkOzTA6GGUbpjxtlRElv/view?usp=sharing" target="_blank" rel="noreferrer"><AiOutlineIdcard size={35}/></a> }
                        { props.linkedin && <a className="link" href="https://www.linkedin.com/in/nicolas-belda-8967821b2/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={35}/></a> }
                        { props.email && 
                           <>
                            <button className="buttonMail" ref={target} onClick={() => setShow(!show)}>
                                <HiOutlineMail size={35}/>
                            </button>
                            <Overlay target={target.current} show={show} placement="bottom">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                    padding: '2px 10px',
                                    color: 'white',
                                    borderRadius: 3,
                                    ...props.style,
                                    }}
                                >
                                    nicolas.belda@yahoo.fr
                                </div>
                                )}
                            </Overlay>
                            </>                         
                        }
                        
                </Row>
            </Container>
    );
}


<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" >
  
</button>


export default Icons;
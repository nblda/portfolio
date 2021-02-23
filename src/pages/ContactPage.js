import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Hero from '../components/Hero';
import Content from '../components/Content';
import NavArrow from '../components/NavArrow';

// import Axios from 'axios';

function ContactPage(props) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: '',
    //         disabled: false,
    //         emailSent: null,
    //     }
    // }


    // handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     })
    // }


    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(event.target);

    //     this.setState({
    //         disabled: true
    //     });

    //     Axios.post('http://localhost:3030/api/email', this.state)
    //         .then(res => {
    //             if(res.data.success) {
    //                 this.setState({
    //                     disabled: false,
    //                     emailSent: true
    //                 });
    //             } else {
    //                 this.setState({
    //                     disabled: false,
    //                     emailSent: false
    //                 });
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);

    //             this.setState({
    //                 disabled: false,
    //                 emailSent: false
    //             });
    //         })

    // }


    // render() {

    function sendEmail(e){
        e.preventDefault();

        //remplacer les valeurs apres inscription puis creation d'un service et d'un template
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
        return(
            <div>
                <Hero title={props.title} />

                <NavArrow side="left" to="/about"/>

                <Content>
                    {/* this.handleSubmit */}
                    <Form onSubmit={sendEmail}> 
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit">
                            Send
                        </Button>


                        {/* {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>} */}
                    </Form>
                </Content>
            </div>
        );
    // }

}

export default ContactPage;
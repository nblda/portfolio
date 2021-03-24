import React from 'react';

import Form from 'react-bootstrap/Form';
        // import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import '../App.css';
import '../index.css';

import Hero from '../components/Hero';
import Content from '../components/Content';
import NavArrow from '../components/NavArrow';

// import Axios from 'axios';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    resetForm = () => {
        // e.target.reset();
        console.log('reset');
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }
    
    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const value =  target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    sendEmail = (e) => {
        e.preventDefault();

        this.setState({
            disabled: true
        });

        //remplacer les valeurs apres inscription puis creation d'un service et d'un template
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            this.setState({
                disabled: false,
                emailSent: true
            });
        }, (error) => {
            console.log(error.text);
            this.setState({
                disabled: false,
                emailSent: false
            });
        });
    }
    render(){
        return(
            <div>
                <Hero  title={this.props.title} />

                <NavArrow side="left" to="/about"/>

                <Content className="formContact">
                    {/* this.handleSubmit */}
                    <Form onSubmit={this.sendEmail}> 
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>


                        <button className="btn m-1 btn-primary"  type="submit" disabled={this.state.disabled} >
                            Send
                        </button>

                        <button className="btn btn-outline-primary" type="button" onClick={this.resetForm}>
                            Reset Form
                        </button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;
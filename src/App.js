import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

import projectsData from './projectsData.js'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title:  'Nicolas Belda',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home : {
        title: 'Have fun',
        subTitle: 'You will learn about me',
        text: 'Enjoy your visit'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      },
      projects: projectsData
    }
  }

  render(){
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Nicolas Belda</Navbar.Brand>
            
              <Navbar.Toggle aria-controls="navbar-toggle"/>

              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />

            <Footer />

          </Container>
        </Router>
      );
    }
}

export default App;

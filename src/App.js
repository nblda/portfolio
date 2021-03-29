import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import logoSansFond1 from './assets/logos/logoSansFond1.png';

// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import StackPage from './pages/StackPage';

// import gradienta from './assets/images/gradienta.jpg';

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
        title: 'Welcome!',
        subTitle: 'Thank you for coming here.',
        text: 'Enjoy your visit!'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      },
      projects: {
        title:'Find my projects below',
        data : projectsData
      },
      stack: {
        title: 'Techs I am familiar with.',
        subTitle: 'Try to reveal them all by playing the game.',
      }
    }
  }

  render(){
    return (
      <div className="contentApp">
        <Router>
          <Container className="p-0 pb-5" fluid={true}>
            <Navbar  bg="transparent" expand="lg">
              <Navbar.Brand><img className="logoNB" src={logoSansFond1} alt="logo Belda Nicolas"></img></Navbar.Brand>
            
              <Navbar.Toggle aria-controls="navbar-toggle"/>

              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto navToggle">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/stack">Stack</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} /> } />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />
            <Route path="/stack" exact render={() => <StackPage title={this.state.stack.title} subTitle={this.state.stack.subTitle} text={this.state.stack.text} /> } />
            <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} /> } />

            </Container>

            {/* <Footer /> */}

        </Router>
        </div>
      );
    }
}

export default App;

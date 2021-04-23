import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import logoSansFond1 from './assets/logos/logoSansFond1.png';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import StackPage from './pages/StackPage';

import TopBar from './components/TopBar.js';

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
        title: 'About me',
        text: 'Click any card to learn more about my hobbys!'
      },
      contact: {
        title: 'Let\'s talk'
      },
      projects: {
        title:'Find my projects below',
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
          <Container className="p-0 pb-2" fluid={true}>
            <Navbar collapseOnSelect={true} bg="transparent" expand="lg">
              <Navbar.Brand>
              <Link to="/">
                <img className="logoNB" src={logoSansFond1} alt="logo Belda Nicolas"></img>
              </Link>
              </Navbar.Brand>
          
                <TopBar></TopBar>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} text={this.state.about.text} /> } />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} /> } />
            <Route path="/stack" exact render={() => <StackPage title={this.state.stack.title} subTitle={this.state.stack.subTitle} text={this.state.stack.text} /> } />
            <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} /> } />

            </Container>

        </Router>
        </div>
      );
    }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap';

class TopBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    openNav = () => {
        document.getElementById("myNav").style.height = "100%";
      }
      
      closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
      }

    render(){
        return(
            <>
            <div id="rowNav">
                <Nav className="ml-auto navToggle">
                  <Link eventKey="1" className="nav-link" to="/">Home</Link>
                  <Link eventKey="2" className="nav-link" to="/stack">Stack</Link>
                  <Link eventKey="3" className="nav-link" to="/projects">Projects</Link>
                  <Link eventKey="4" className="nav-link" to="/about">About</Link>
                  <Link eventKey="5" className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </div>
            <div id="barsNav">
                <div id="myNav" class="overlay">
                    <span to="/" class="closebtn" onClick={this.closeNav}>&times;</span>
                    <div class="overlay-content">
                    <Link onClick={this.closeNav} to="/">Home</Link>
                    <Link onClick={this.closeNav} to="/stack">Skills</Link>
                    <Link onClick={this.closeNav} to="/projects">My projetcs</Link>
                    <Link onClick={this.closeNav} to="/about">About Me</Link>
                    <Link onClick={this.closeNav} to="/contact">Contact</Link>
                    </div>
                </div>
                

                <span onClick={this.openNav}>&#9776;</span>
                </div>
            </>
        );
    }    
}
 export default TopBar;
  

 

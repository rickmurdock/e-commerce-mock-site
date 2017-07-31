import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    let brandStyle = {
      fontFamily:"Faster One", 
      fontSize:"1.5em", 
      padding:0, 
      color:"red"
    }

    return (
      <div>
        <nav className="navbar navbar-toggleable-md fixed-top navbar-light" style={{backgroundColor:"#FFCC00"}}>
          <a className="navbar-brand" href="/"><span style={brandStyle}>Rick's</span> Auto Parts</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/parts">Parts</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/tools">Tools</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/services">Services</NavLink>
            </div>
            <div className="navbar-nav">
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/about">About Us</NavLink>
              <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Contact Us</NavLink>
            </div>
          </div>
        </nav>
          {this.props.children}
        <footer className="navbar fixed-bottom navbar-light" style={{backgroundColor: "#FFCC00"}}>
            <div className="navbar-nav">
              <p className="navbar-text" style={{margin:"auto"}}>© 2017 Rick's Auto Parts. All rights reserved.</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default NavBar;
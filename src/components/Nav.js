import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {

    let navStyle = {
      color: "black",
      backgroundColor: "#FFCC00",
      
    }

    return (
<div>
      <nav className="navbar navbar-toggleable-md fixed-top navbar-light" style={{backgroundColor: "#FFCC00"}}>
        <a className="navbar-brand" href="/"><span style={{fontFamily: "Faster One", fontSize:"1.5em", padding:0, color:"red"}}>Rick's</span> Auto Parts</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink activeClassName="selected" className="nav-item nav-link" to="/parts">Parts</NavLink>
            <NavLink activeClassName="selected" className="nav-item nav-link" to="/tools">Tools</NavLink>
            <NavLink activeClassName="selected" className="nav-item nav-link" to="/services">Services</NavLink>
          </div>

          {/*<div className="navbar-nav navbar-text" style={{float: "right"}}>
            <NavLink activeClassName="selected" className="nav-item nav-link" to="/about">About Us</NavLink>
            <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Contact Us</NavLink>
          </div>*/}
        </div>
      </nav>
        {this.props.children}
      <footer className="navbar fixed-bottom navbar-light" style={{backgroundColor: "#FFCC00"}}>
        <div className="row-fluid">
          <div className="span12">
            <div className="span8">
              <a href="/">Terms of Service</a>    
              <a href="/">Privacy</a>    
            </div>
            <div className="span4">
              <p className="muted pull-right">© 2017 Rick's Auto Parts. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/*<div>
        <nav class="navbar navbar-light" style={{backgroundColor: "#FFCC00}"}}>
          <div >
            <h1>Rick's Auto Parts</h1>
            <NavLink activeClassName="selected" className="nav-link" exact to="/">Main</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/tools">Tools</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/parts">Parts</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/wheels">wheels</NavLink>
          </div>
          

          <div style={{float: "right"}}>
            <NavLink activeClassName="selected" className="nav-link" to="/about">About Us</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact Us</NavLink>
          </div>
        </nav>
        {this.props.children}
      </div>*/}
</div>
    );
  }
}

export default NavBar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import services from "../data/services.js";

class Services extends Component {
  render() {

    let match = this.props.match;

    let navServices = services.map((service) => {
      return(
        <div key={service.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={service.image} alt={service.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{service.name}</h4>
              <p className="card-text">Part No. {service.partNumber}</p>
              <p className="card-text" style={{color:"red", fontSize:"1.3em"}}><strong>{service.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${service.partNumber}`}>Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
          {navServices}
        </div>
      </div>
    );
  }
}

export default Services;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parts from "../data/parts.js";

class Parts extends Component {
  render() {

    let match = this.props.match;

    let navParts = parts.map((part) => {
      return(
        <div key={part.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={part.image} alt={part.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{part.name}</h4>
              <p className="card-text">Part No. {part.partNumber}</p>
              <p className="card-text" style={{color:"red", fontSize:"1.3em"}}><strong>${part.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${part.partNumber}`}>Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 80, marginBottom: 100}}>
        <div className="card-deck">
          <div className="row">
            {navParts}
          </div>
        </div>
      </div>
      
    );
  }
}

export default Parts;
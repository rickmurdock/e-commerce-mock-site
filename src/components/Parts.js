import React, { Component } from 'react';

import parts from "../data/parts.js";

class Parts extends Component {
  render() {

    let match = this.props.match;

    let navParts = parts.map((part) => {
      return(
        <div className="col-sm-4">
        <div className="card" key={parts.id} style={{ marginTop: 20}}>
          <img className="card-image-top" src={part.image} alt={part.imageAlt} style={{width:"150px", margin:"auto"}} />
          <div className="card-block">
              <h4 className="card-title">{part.name}</h4>
              <p className="card-text">{part.description}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {part.price}</li>
                <li className="list-group-item">Warranty: {part.warranty}</li>
              </ul>
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
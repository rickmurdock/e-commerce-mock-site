import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tools from "../data/tools.js";

class Tools extends Component {
  render() {

    let match = this.props.match;

    let navTools = tools.map((tool) => {
      return(
        <div key={tool.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={tool.image} alt={tool.imageAlt} style={{width: "150px", margin:"auto"}} />
            <div className="card-block">
                <h4 className="card-title">{tool.name}</h4>
                <p className="card-text">Part No. {tool.partNumber}</p>
                <p className="card-text" style={{color:"red", fontSize:"1.3em"}}><strong>{tool.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${tool.partNumber}`}>Details</Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25, marginTop: 70, marginBottom: 100}}>
        <div className="card-deck">
          {navTools}
        </div>
      </div>
    );
  }
}

export default Tools;
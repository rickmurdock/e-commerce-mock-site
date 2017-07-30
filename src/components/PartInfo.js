import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import parts from '../data/parts';

import Part from './Part';

export default class PartInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favParts = parts.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Part key={item.id} data={item}/>
        );
      }
    });

    return (
      <div style={{marginTop: 150, marginRight:"auto", marginLeft:"auto"}}>
        <Link className="btn btn-large btn-danger" to="/parts">Back to Parts</Link>
        {favParts}
      </div>
    );
  }
}
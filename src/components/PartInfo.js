import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import parts from '../data/parts';

import Detail from './Detail';

export default class PartInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favParts = parts.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/parts">Back to Parts</Link>
        {favParts}
      </div>
    );
  }
}
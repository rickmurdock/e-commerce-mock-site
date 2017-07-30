import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import services from '../data/services';

import Detail from './Detail';

export default class ServiceInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favDetail = services.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/services">Back to Services</Link>
        {favDetail}
      </div>
    );
  }
}
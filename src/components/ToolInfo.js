import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tools from '../data/tools';
import Detail from './Detail';

export default class ToolInfo extends Component {

  render() {

    const {partnum} = this.props.match.params;

    let favDetail = tools.map((item) => {

      if(item.partNumber === partnum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/tools">Back to Tools</Link>
        {favDetail}
      </div>
    );
  }
}
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: 100, textAlign:"center"}}>
        <h1><span style={{fontFamily: "Faster One", color:"red", fontSize:"4em"}}>Rick's</span></h1>
        <h1>Auto Parts</h1>
        <br/>
        <h3>Home of Cheap Prices and Quality Parts!</h3>
      </div>
    );
  }
}

export default Home;
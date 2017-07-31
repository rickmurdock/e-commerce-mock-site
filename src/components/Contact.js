import React from 'react';

const Contact = () => {

  let liStyle = {
    fontSize: 25,
    textAlign: "left",
    paddingLeft: 0,
    listStyle: "none"
  };

  let lableStyle = {
    color: "red", 
    fontSize:".8em"
  };

  return(
    <div className="container" style={{marginTop:100, textAlign:"center"}}>
      <h1>Contact <span style={{fontFamily: "Faster One", color:"red", fontSize:"1.5em"}}> Rick's</span> Auto Parts</h1>
      <br/>
      <ul className="col-4 offset-4" style={liStyle}>
        <li style={lableStyle}>Email</li>
        <li>ricksautoparts@live.com</li>
        <br/>
        <li style={lableStyle}>Telephone</li>
        <li>615-794-1234</li>
        <br/>
        <li style={lableStyle}>Address</li>
        <li>123 E. Main St</li>
        <li>Franklin, TN 37067</li>
      </ul>
    </div>
    
  );
};

export default Contact;
import React from 'react';

const Contact = () => {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    textAlign: "center",
    paddingLeft: 0,
    listStyle: "none"
  };

  return(
    <div >
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme"}}>Contact Kylo Ren</h1>
      <br/>
      <ul style={liStyle}>
        <li>Home: A Galaxy Far Far Away</li>
        <li>Galactic Phone: DS-800-EVIL</li>
        <li>Affiliations: First Order, Knights of Ren</li>
        <li><a href="https://www.facebook.com/StarWars/" style={{color: "#E5B13A"}}>Facebook</a></li>
        <li><a href="https://github.com/rickmurdock" style={{color: "#E5B13A"}}>GitHub</a></li>
        <li><a href="https://twitter.com/starwars" style={{color: "#E5B13A"}}>Twitter</a></li>
      </ul>
    </div>
    
  );
};

export default Contact;
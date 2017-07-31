import React from 'react';

const About = () => {

  return (
    <div className="container" style={{marginTop:100, textAlign:"center"}}>
      <h1>About <span style={{fontFamily: "Faster One", color:"red", fontSize:"1.5em"}}> Rick's</span> Auto Parts</h1>
      <br/>
      <p className="text-center col-6 offset-3" style={{fontSize:"1.5em"}}>
        Rick's Auto Parts has been serving cars guys since 1967. Actually, Rick's Auto Part's is a ficticious site and hasn't really served anyone. However, Rick is real and he built this site.
      </p>
    </div>
  );
};

export default About;
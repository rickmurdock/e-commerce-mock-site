import React from 'react';

const Part = (props) => {

  let part = props.data;

  return(
  
    <div>
      <h1>{part.name}</h1>
    </div>
    
  );

};

export default Part;
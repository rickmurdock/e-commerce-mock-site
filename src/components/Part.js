import React from 'react';

const Part = (props) => {

  let part = props.data;

  return(
    <div className="col-sm-6 mx-auto">
      <div className="card " style={{marginTop: 20,}}>
        <div className="card-block">
          <img className="card-image-top" src={part.image} alt={part.imageAlt} style={{width:"250px", float:"left"}} />
          <h4 className="card-title">{part.name}</h4>
          <p className="card-text">Part No. {part.partNumber}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: ${part.price}</li>
            <li className="list-group-item">Warranty: {part.warranty}</li>
            <li className="list-group-item text-left">{part.details}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Part;
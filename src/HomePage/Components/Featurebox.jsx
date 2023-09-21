import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div class='a-b-text'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
        </div>
      
    </div>
  );
}

export default Featurebox;

import React, { useState } from 'react';
import '../HomePage.css';
import Modal from './Modal';

function Offer() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div id='offer'>
      <div className='pr-heading'>
        <h1>A BIG <span>OFFER</span> FOR THIS SEASON</h1>
        <p className='details'>Experience gaming like never before with our exclusive season offer! </p>
        <div className='pr-btns'>
          <a className='pr-btn' onClick={() => setButtonPopup(true)}>POWER UP!</a>
        </div>
      </div>
      <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Ascend to Elite Access</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, repudiandae et est beatae similique facere voluptatem natus recusandae ex nulla blanditiis assumenda earum dolor vero accusamus fugiat nemo delectus aperiam.</p>
      </Modal>
    </div>
  );
}


export default Offer;

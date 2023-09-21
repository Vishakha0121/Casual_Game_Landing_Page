import React from 'react';
import '../HomePage.css';

function Header() {
  return (
    <div id="main">
      <div className='pr-heading'>
        <h2>BOOST YOUR FUN FACTOR</h2>
        <h1><span>GAME</span> WITH US!</h1>
        <p className='details'>Discover an immersive gaming experience like never before and elevate your playtime to new heights</p>
        <div classname='header-btns'>
            <a href="#" className='header-btn'>PLAY</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

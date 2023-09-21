import React from 'react';
import AboutImg from '../Images/game_3 (4).jpg'
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={AboutImg} alt=''/>
      </div>
      <div className='about-text'>
        <h1>EXPLORE OUR GAMING WORLD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat, rerum voluptas facilis, quae ratione sapiente officiis aliquam repellendus asperiores impedit dolore numquam fugiat saepe consequatur neque atque quasi corrupti!</p>
        <button>DIVE DEEPER</button>
      </div>
    </div>
  );
}

export default About;

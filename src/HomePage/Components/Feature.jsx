import React from 'react';
import Featurebox from './Featurebox';
import casual from  '../Images/casual.svg'
import fun from  '../Images/fun.svg'
import time from  '../Images/time_1.svg'
import variety from  '../Images/variety.svg'

function Feature() {
  return (
    <div id="features">
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={casual} title="Casual Games" para="Dive into a realm of easy-to-play, entertaining titles designed for everyone." />
            <Featurebox image={time} title="Short Play Sessions" para="No need to commit to long gaming sessions—fun is just a click away!" />
            <Featurebox image={variety} title="Variety" para="Explore a diverse array of casual games in our library." />
            <Featurebox image={fun} title="Fun" para="Dive in, challenge yourself, and have a blast with our lighthearted and enjoyable titles." />
        </div>
    </div>
  );
}

export default Feature;

import React from 'react';

function Contact() {
  return (
    <div id="contact">
        <h1>CONTACT THE COMMAND CENTER</h1>
        <form>
            <input type="text" placeholder="Epic Gaming Identity" required/>
            <input type="email" placeholder="Player Email" required/>
            <textarea placeholder='Advance the Adventure.....' name=""message required></textarea>
            <input type='submit' value='GO AHEAD'/>
        </form>
    </div>
  );
}

export default Contact;

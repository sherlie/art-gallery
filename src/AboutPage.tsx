import React from 'react';
import './App.css';

const AboutPage = () => {
  return (
    <div className='content-padding'>
      <div>
        <h1>Hi!</h1>
        <p>I am a frontend developer, and this is my pet project to show my skills.</p>
      </div>

      <address>
        <a className='a-link' href='https://www.linkedin.com/in/diana-grygorian-169ba713b/'>
          LinkedIn
        </a>
        <span>
          d.grygorian@gmail.com
        </span>
      </address>
    </div >
  );
}

export default AboutPage;

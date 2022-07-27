import React from 'react';
import './App.css';
import { PageNoutFoundImg as Img } from './data';

const NotFoundPage = () => {
  return (
    <div className='content-padding'>
      <div className='center-wrapper'>
        <img src={Img.src} alt={Img.description} />
      </div>
      <div className='center-wrapper'>
        <h1 style={{ margin: 0 }}>404</h1>
      </div>
      <div className='center-wrapper'>
        <h3>Page not found.</h3>
      </div>
    </div>
  );
}

export default NotFoundPage;

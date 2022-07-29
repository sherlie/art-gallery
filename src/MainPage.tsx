import React from 'react';
import './styles/App.scss';
import RightArrowIcon from './icons/RightArrowIcon';

const MainPage = () => {
  return (
    <div className='bg-image'>
      <div className='bg-image-overlay'>
        <div className='content-padding'>
          <h1>Your Digital<br />Art Gallery</h1>
          <a href='/gallery'>
            <button className='button-start'>
              Start exploring<RightArrowIcon size={20} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

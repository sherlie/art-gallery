import React from 'react';
import './styles/App.scss';

const NotFoundPage = () => {
  const description = 'Mona Lisa by Leonardo da Vinci';
  const src = 'https://officialpsds.com/imageview/7y/z6/7yz65y_large.png?1521316531';

  return (
    <div className='content-padding'>
      <div className='center-wrapper'>
        <img src={src} alt={description} />
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

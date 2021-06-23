import React from 'react';
import { Link } from 'react-router-dom';

const InformationRow = () => {
  return (
    <div className='row-container home-row'>
          <div className='image-container-home'>
              <Link to='/profile'>
        <div className='image monitor' />
        <div className='homePageTitle'>Monitor</div>
                  </Link>
      </div>
        <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn' />
        <div className='homePageTitle'>Learn</div>
        
                  </Link>
      </div>
          <div className='image-container-home'>
              <Link to='/questionnaire'>
        <div className='image improve' />
        <div className='homePageTitle'>Improve</div>
        
                  </Link>
      </div>
      <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn2' />
        <div className='homePageTitle'>learn2</div>
        
                  </Link>
      </div>
    </div>
  );
};

export default InformationRow;

import React from 'react';
import { Link } from 'react-router-dom';

const InformationRow = () => {
  return (
    <div className='row-container home-row'>
          <div className='image-container-home'>
              <Link to='/profile'>
        <div className='image monitor' />
        <div className='title-home'>Cloud Paks</div>
                  </Link>
      </div>
        <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn' />
        <div className='title-home'>Benefit</div>
        
                  </Link>
      </div>
          <div className='image-container-home'>
              <Link to='/questionnaire'>
        <div className='image improve' />
        <div className='title-home'>Impact</div>
        
                  </Link>
      </div>
      <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn2' />
        <div className='title-home'>How Cloud Paks Help</div>
        
                  </Link>
      </div>
    </div>
  );
};

export default InformationRow;

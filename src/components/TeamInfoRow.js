import React from 'react';
import { Link } from 'react-router-dom';

const InformationRow = () => {
  return (
    <div className='row-container home-row'>
          <div className='image-container-home'>
              <Link to='/profile'>
        <div className='image monitor' />
        <div className='title'>Monitor</div>
        <div className='text'>
                      Monitor your progress over time all in the app.
        </div>
                  </Link>
      </div>
        <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn' />
        <div className='title'>Learn</div>
        <div className='text'>
                      Learn how to better yourself and lower your emissions.
        </div>
                  </Link>
      </div>
          <div className='image-container-home'>
              <Link to='/questionnaire'>
        <div className='image improve' />
        <div className='title'>Improve</div>
        <div className='text'>
                      Improve your emissions by constantly using the app!
        </div>
                  </Link>
      </div>
      <div className='image-container-home'>
              <Link to = "/Learn">
        <div className='image learn2' />
        <div className='title'>learn2</div>
        <div className='text'>
                      Learn how to better yourself and lower your emissions.
        </div>
                  </Link>
      </div>
    </div>
  );
};

export default InformationRow;

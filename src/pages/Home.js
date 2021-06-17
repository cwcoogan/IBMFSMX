import React from 'react';
import { Link } from 'react-router-dom';
import InformationRow from '../components/InformationRow';
import homeImgFir from '../images/girl-earth.svg';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'>
            <p className='lead'>
              Welcome to the
            </p>
              <h1 className='display-5 font-weight-bold'>
                Financial Services Market <br></br>
                Experience
              </h1>
              <p className='lead'>
            An innovative environment for all your client needs
            </p> 
            </div>
            <Link
              to='/questionnaire'
              className='btn btn-primary my-2 my-lg-0 py-3 px-5'
            >
              Get Started
            </Link>
          </div>
          <div className='col-lg-6'>
            <div className='hero-img-right'>
              <img
                src={homeImgFir}
                className='fluid-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
        </div>
        <InformationRow />
      </div>
    </div>
  );
};

export default Home;

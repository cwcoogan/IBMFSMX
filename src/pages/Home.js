import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import InformationRow from '../components/InformationRow';
import homeImgFir from '../images/home1.jpg';
import homeImgSec from '../images/home2.png';


const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'>
            <p className='lead font-weight-bold'>
              Welcome to the
            </p>
              <h1 className='display-5 font-weight-bold'>
                Financial Services Market <br></br>
                Experience
              </h1>
              <p className='lead font-weight-bold'>
            An innovative environment for all your client needs
            </p> 
            </div>
            
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
        <InformationRow/>
        <div className='row-container' >
          <h1 className='display-4'> </h1>
          <h1 className='display-4 font-weight-bold mb-3'>FSM/Cloud Fact</h1>
         <img 
         src={homeImgSec}
                className='fluid-img'
                alt='Sitting on questionnaire'></img>
          <h1 className='display-4 font-weight-bold mb-3'>FSM/Cloud Fact</h1>
      </div>
      
      </div>
    </div>
  );
};

export default Home;

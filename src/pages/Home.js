import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import InformationRow from '../components/InformationRow';
import homeImgFir from '../images/home1.jpg';
//import homeImgSec from '../images/home2.png';
import homeImgThird from '../images/home3.png';
import homeImgFourth from '../images/home4.png';


const Home = () => {
  return (
    <div className='homePage'>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'>
            <p className='lead font-weight-bold'>
              Welcome to the
            </p>
              <h1 className='financialServicesMarket'>
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
      <div className= 'row-container'>
      <h1 className='homePageTitle'>Business Cases</h1>
      </div>
      <img 
         src={homeImgThird}
                className='fluid-img'
                alt='Sitting on questionnaire'></img>
      <div className='row-container'>
      <h1 className='homePageTitle'>Highmark Health expedites AI in urgent times</h1>
        <img 
         src={homeImgFourth}
                className='img'
                alt='Sitting on questionnaire'> 
                </img>
        <p className='homePageText'>
              Get insights into application to identify high-rish patients for sepsis, cuts AI lifecycle from one year to six weeks. 
              <a href="https://www.ibm.com/blogs/journey-to-ai/2021/01/highmark-health-teams-with-ibm-advancing-data-science-to-stem-a-growing-tide-of-sepsis-and-covid-19-hospital-admissions/">Read More</a>
            </p>
      </div>
      
      </div>
    </div>
  );
};

export default Home;

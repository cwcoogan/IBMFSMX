import React from 'react';
import InformationRow from '../components/InformationRow';
import homeImgFir from '../images/home1.jpg';


const Home = () => {
  return (
    <div className='homePage'>
      <div className='container'>
        <div className='row mt-5 home-hero-row-reverse-mobile home-row '>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'>
            <p className='lead font-weight-bold'>
              Welcome to the
            </p>
              <h1 className='financialServicesMarket'>
                Financial Services Market
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
      
      
</div>
<div class="row top-border">
  <div class="column left right-border">
  <h2 className="homePageTitle"> Business Cases </h2>
  </div>
  <div class="column right">
<p className="businessCaseText">
  <h2 className= "homePageTitle">CDG Prévoyance modernizes application architecture</h2>
  Automates core processes and reduces
  time from five days to one hour, 
  speeding up time to market. <a href="https://www.ibm.com/case-studies/cdg-prevoyance/"> Read →</a> </p>
  <p className="businessCaseText">
  <h2 className= "homePageTitle">Telefonica, IBM, and Red hat join forces</h2>
  Telefonica creates next phase of cloud with IBM Cloud Paks, combing technologies in containers, AI and blockchain. 
  <a href="https://www.ibm.com/case-studies/telefonica-spain/"> Read →</a>
  </p>
  <p className="businessCaseText">
  <h2 className= "homePageTitle">Bic Camera, Inc. - A monumental upgrade </h2>
  How Bic Camera increased data reporting times by 100x using IBM Cloud Pak for Data.
   <a href="https://www.ibm.com/case-studies/bic-camera/"> Read →</a>
  </p>
  </div>
  
</div>
      
      </div>
 
  );
};

export default Home;

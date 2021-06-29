import React from 'react';
import InformationRow from '../components/InformationRow';
import homeImgFir from '../images/home1.jpg';


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
      
      
</div>
<div class="row top-border">
  <div class="column left right-border">
  <h2 className="homePageTitle"> Business Cases </h2>
  </div>
  <div class="column right">
<p className="businessCaseText">
  <h2 className= "homePageTitle">Highmark Health expedites AI in urgent times</h2>
  Get insights into application to identify
  high-rish patients for sepsis, cuts AI 
  lifecycle from one year to six weeks. <a href="https://www.ibm.com/blogs/journey-to-ai/2021/01/highmark-health-teams-with-ibm-advancing-data-science-to-stem-a-growing-tide-of-sepsis-and-covid-19-hospital-admissions/"> Read →</a> </p>
  <p className="businessCaseText">
  <h2 className= "homePageTitle">Tabadul ushers in a new era when it migrates to microservices.</h2>
  The technology firm's move to microservices architecture cuts new feature development time by two-thirds. 
  <a href="https://www.ibm.com/case-studies/tabadul/"> Read →</a>
  </p>
  <p className="businessCaseText">
  <h2 className= "homePageTitle">ENN takes the leap into AI automation. </h2>
  ENN, an energy giant, tapped into hyperautomation and reduced processing time by 60%.
   <a href="https://www.ibm.com/case-studies/enn-group/"> Read →</a>
  </p>
  </div>
  
</div>
      
      </div>
 
  );
};

export default Home;

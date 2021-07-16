import React from 'react';
import ReactDOM from "react-dom";
import Accordion from "../components/Accordion";
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import contactImgFir from '../images/contact.png';

const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Contact us
              </h1>
              <h1 className='hr-purple'>
              </h1>
              
            <h4><br></br>Looking for services to be added or have general questions? <br>
            </br>Send us a email and we will be in touch. </h4>
            </div>
          </div>
        </div>
      </div>  

      <div className="container">
        <div className='row mt-5 hero-row-reverse mobile home-row'>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'></div>
            <h4 className='font-weight-bold'>
              For questions email:
            </h4>
            <p className='lead font-weight-bold'>
              ● Chase Coogan: chase.coogan@ibm.com<br></br>
              ● John Lucas: john.lucas@ibm.com
            </p>
          </div> 
          <div className='col-lg-5'>
            <div className='hero-img-right'>
              
            </div>
          </div> 
        </div>
      </div>

    
      
      <div className='container mobile home-row'>
      <Accordion className='accordion'
        title="How do I access the environment"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion className='accordion'
        title="What is a Cloud Pak"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion className='accordion'
        title="Where can I learn more"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      />
      <Accordion className='accordion'
        title="How do I add a service"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      />
      
    
    </div>  
    </div>

        
  );
};


export default Contact;

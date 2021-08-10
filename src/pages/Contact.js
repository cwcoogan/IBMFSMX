import React from 'react';
import ReactDOM from "react-dom";
import Accordion from "../components/Accordion";
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';

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
        content="To access the environment, you will need to create a TECnet user ID, and login through the VPN. Instructions to do so can be found here. Once you are on the VPN, you will need to decide which Cloud Pak you will want to access- all installed Cloud Paks can be found here. All environments are running off of OpenShift 4.6, and installed services can be found on the installations page."
      />
      <Accordion className='accordion'
        title="What is a Cloud Pak"
        content="IBM Cloud Paks are AI-powered software that can help organizations build, modernize, and manage applications securely across any cloud. <br></br<br></br>They include pre-certified containerized software and foundational services that provide customers with a common operations and integrations framework. Built on Red Hat OpenShift, the market leader for open source, hybrid cloud platform, they provide a consistent experience for an infrastructure management control plane that includes AI, automation, and security."
      />
      <Accordion className='accordion'
        title="Where can I learn more"
        content="to learn more please visit link."
      />
      <Accordion className='accordion'
        title="How do I add a service"
        content="Before adding a service, please make sure that it is not already available in the environmnet. A list of installed services can be found on the Installations page.<br></br>To make a request to add additional services, please contact Chase Coogan, or John Lucas at their designated email addresses found on the Contact page."
      />
      
    
    </div>  
    </div>

        
  );
};


export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const InformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
          <Popup
        trigger={<div className='image-container-home'>
        <div className='image monitor' />
        <div className='homePageText text-center'>What are Cloud Paks?</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button >
            <div className="display-4 font-weight-bold text-center mb-3"> What are Cloud Paks?</div>
            <div className="content font-weight-bold">
            <br></br>
              <br />

              IBM Cloud Paks are AI powered software that can help organizations build, modernize, <br></br>
              and manage applications securely across any cloud. 
              <br></br>
              <br></br>
              They include pre-certified containerized software and foundational services that provide <br></br>
              customers with a common operations and integration framework. Built on Red Hat OpenShift, <br></br>
              the market leader for open source, hybrid cloud platform, they provide a consistent <br></br>
              experience for an infrastructure management control plane that includes, AI, Automation and security.
              <br></br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<div className='image-container-home'>
        <div className='image learn' />
        <div className='homePageText text-center'>Cloud Paks Benefits</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> Cloud Paks Benefits</div>
            <div className="content font-weight-bold">
            • Gain agility and flexibility:<br></br>
            Make your data, applicattions and workflows work your you, wherever you are. <br></br>

              <br />
              • Accelerate AI and automation:<br></br>
              Deliver software and insights faster with an intelligent control plane powered by AI. <br></br>
              <br />
              
              • Innovate with condifence<br></br>
              Co-innovate with thousands of IBM industry and technical experts. <br></br>
              <br></br>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<div className='image-container-home'>
        <div className='image improve' />
        <div className='homePageText text-center'>Impacts of Cloud Paks</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> Impacts of Cloud Paks</div>
            <div className="content font-weight-bold">
            • 66%<br></br>
            Accelerate development by up to 66% using IBM and Red Hat solutions together. <br></br>
              
              <br />
              • 60%<br></br>
              Reduce processing time by 60% by leveraging hyperautomation to boost productivity. <br></br>
              <br></br>
              • 6x<br></br>
              Release 6x more innovations in market with IBM Garage. <br></br>
              <br></br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        trigger={<div className='image-container-home'>
        <div className='image learn2' />
        <div className='homePageText text-center'>How Cloud Paks Help</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> How Cloud Paks Help</div>
            <div className="content font-weight-bold">
              • Modernize with ease<br></br><br></br>
              Our pre-integrated containerized software and solutions simplify modernization from <br></br> 
              the data center all the way to the edge. Take advantage of enterprise-grade, cloud native technologies <br></br>
              from IBM and our rich ecosystem of software and SaaS Partners offering access to over 70 ISV tools in Red Hat <br></br>
              Marketplace for easy deployment. <br></br><br></br>

              • Predict Outcomes<br></br><br></br>

              Become a more predictive enterprise by collecting, organizing, and analyzing data regardless of its type or location. <br></br>
              Our data and AI capabilities with cross-industry and vertical AI applications use the power of IBM® Watson® to simplify and <br></br>
              accelerate your AI journey. <br></br><br></br>

              • Automate at scale <br></br><br></br>

              Whether it’s automating repetitive tasks or more complex operations, we can help you implement a variety of intelligent workflows
              into your business through machine learning and AI. This helps improve productivity and quality of outcomes for employees and customers alike. <br></br><br></br>

              • Secure everything <br></br><br></br>

              We make security an integral part of our software. Mitigate threats while managing risk and compliance throughout your enterprise all without
              moving your data. We can help you more quickly integrate your existing security tools to gain a deeper understanding of the risks facing your environment, <br></br>
              orchestrate actions and automate responses. <br></br>

               <br></br>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
      
    </div>
  );
};

export default InformationRow;

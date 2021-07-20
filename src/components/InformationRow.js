import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const InformationRow = () => {
  return (
    <div className='row-container hero-row-reverse-mobile'>
          <Popup
        trigger={<div className='image-container-home'>
        <div className='image-home monitor' />
        <p className='text font-weight-bold'>What are Cloud Paks?</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button >
            <div className="header"> What are Cloud Paks?</div>
            <br></br><br></br>
            <div className="content modalText">
            
              IBM Cloud Paks are AI powered software that can help organizations build, modernize, 
              and manage applications securely across any cloud. 
              <br></br>
              <br></br>
              They include pre-certified containerized software and foundational services that provide
              customers with a common operations and integration framework. Built on Red Hat OpenShift, 
              the market leader for open source, hybrid cloud platform, they provide a consistent 
              experience for an infrastructure management control plane that includes, AI, Automation and security.
              <br></br>
              <br />
            </div>
            <div className="actions">
              <button
                className="popup-button"
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
        <div className='image-home learn' />
        <p className='text font-weight-bold'>Cloud Paks Benefits</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Cloud Paks Benefits</div>
           <br></br><br></br>
            <div className="content modalText2">
            Gain agility and flexibility:<br></br></div>
            <div className="content modalText">
            Make your data, applicattions and workflows work your you, wherever you are. <br></br>
            </div>
            <div className="conent modalText2">
            <br />
            Accelerate AI and automation:<br></br>
            </div>
            <div className="conent modalText">
            Deliver software and insights faster with an intelligent control plane powered by AI. <br></br>
            <br />
            </div>
            <div className="content modalText2">
            Innovate with condifence:<br></br>
            </div>
            <div className="content modalText">
            Co-innovate with thousands of IBM industry and technical experts. <br></br>
            <br></br>
            </div>
            <div className="actions">
              <button
                className="popup-button"
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
        <div className='image-home improve' />
        <p className='text font-weight-bold'>Impacts of Cloud Paks</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Impacts of Cloud Paks</div>
            <br></br><br></br>
            <div className="content modalText">
            <div className="content modalText2">
            66%<br></br></div>
            Accelerate development by up to 66% using IBM and Red Hat solutions together. <br></br>
              
              <br />
              <div className="content modalText2">
              60%<br></br></div>
              Reduce processing time by 60% by leveraging hyperautomation to boost productivity. <br></br>
              <br></br>
              <div className="content modalText2">
              6x<br></br></div>
              Release 6x more innovations in market with IBM Garage. <br></br>
              <br></br>
              <br />
            </div>
            <div className="actions">
              <button
                className="popup-button"
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
        <div className='image-home learn2' />
        <p className='text font-weight-bold'>How Cloud Paks Help</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> How Cloud Paks Help</div>
            <br></br><br></br>
            <div className="content modalText">
             <div className="content modalText2">
              Modernize with ease:<br></br>
              </div>
              Our pre-integrated containerized software and solutions simplify modernization from 
              the data center all the way to the edge. Take advantage of enterprise-grade, cloud native technologies 
              from IBM and our rich ecosystem of software and SaaS Partners offering access to over 70 ISV tools in Red Hat 
              Marketplace for easy deployment. <br></br><br></br>
              <div className="content modalText2">
              Predict Outcomes:<br></br>
              </div>
              Become a more predictive enterprise by collecting, organizing, and analyzing data regardless of its type or location. 
              Our data and AI capabilities with cross-industry and vertical AI applications use the power of IBM® Watson® to simplify and 
              accelerate your AI journey. <br></br><br></br>
              <div className="content modalText2">
              Automate at scale: <br></br>
           </div>
              Whether it’s automating repetitive tasks or more complex operations, we can help you implement a variety of intelligent workflows
              into your business through machine learning and AI. This helps improve productivity and quality of outcomes for employees and customers alike. <br></br><br></br>
              <div className="content modalText2">
              Secure everything: <br></br>
              </div>
              We make security an integral part of our software. Mitigate threats while managing risk and compliance throughout your enterprise all without
              moving your data. We can help you more quickly integrate your existing security tools to gain a deeper understanding of the risks facing your environment,
              orchestrate actions and automate responses. <br></br>

               <br></br>
            </div>
            <div className="actions">
              <button
                className="popup-button"
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

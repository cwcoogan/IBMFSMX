import React from 'react';
import { Nav } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from '../pages/Contact';
import rajesh from "../images/profile-pic/rajesh-kartha.png";

const ClustersInformationRow = () => {
  return (
    <div className='row-container container-fluid'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image data' />
        <div className='title'>Cloud Pak for Data</div>
        {/* <div className='text'>
        Learn how much energy is being used and lower your emissions.
        </div> */}
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            {/* <div className="display-4 font-weight-bold text-center mb-3"> Cloud Pak for Data </div> */}
            <div className="header modalText2"> Cloud Pak for Data </div>
            
            <div className="content modalText">

            <div className='row mt-5'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer]</h3>
             <h4>&nbsp;&nbsp;Rajesh Kartha</h4>
             <b>&nbsp;&nbsp;rajesh.kartha@ibm.com</b>
          </div>
          <div className=''>
            <div className='hero-img-center'>
            <img
                src={rajesh}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Services]</h3>
             
                &nbsp;● DB2 <br></br>
                &nbsp;● MongoDB<br></br>
                &nbsp;● Guardium S-Tap<br></br>
                <div className="hr-black"></div>  
                <h3>[Versions]</h3>
             
                &nbsp;● Lopsum ipsum <br></br>
                &nbsp;● Lopsum ipsum <br></br>
                
                <div className="hr-black"></div>
                <h4>Cloud Pak 4 Data is running on OpenShift 4.6</h4> 
             <br></br>
              [ABOUT]
              <br /><br></br>
              <div className="hr-black"></div>
              <center>Looking for services to be added?</center>
              
            
              
            </div>
            <div className="actions">
              <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
                }}
              >
                Contact Us 
              </button>
                
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
        trigger={<div className='image-container'>
        <div className='image integration' />
        <div className='title'>Cloud Pak for Integration</div>
        {/* <div className='text'>
          Learn how your choice of travel can affect the environment.
        </div> */}
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header modalText2"> Cloud Pak for Integration </div>
            
            <div className="content modalText">
             Cloud Pak 4 Integration is running on OpenShift 4.6 <br>
            </br><br></br>
              [ABOUT]
              <br /><br></br>
              Installer: 
              <h1 className='hr-purple2'></h1> 
              Eric Lowery<br></br><br></br>
              {/* <br /> */}
              Installed Services:<br></br>
              <h1 className='hr-purple2'></h1> 
                API Connect <br></br>
                Data Power Gateway<br></br><br></br>
                
                Looking for services to be added?
              
              <br></br>
           
            </div>
            <div className="actions">
              <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
                }}
              >
                Contact Us 
              </button>
                
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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

export default ClustersInformationRow;

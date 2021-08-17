import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import rajesh from "../images/profile-pic/rajesh-kartha.png";
import eric from "../images/profile-pic/eric-lowry.png"

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

            <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer]</h3>
             <h4>Rajesh Kartha</h4>
             <h5>Client Technical Professional</h5><br></br>
            

             <h4>[Contact]</h4>
             <b>Email: kartha@us.ibm.com</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br><br></br>
          </div>
          <div className=''>
            <div className=''>
            <img
                src={rajesh}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
                <h4>Cloud Pak 4 Data is running on OpenShift 4.6</h4> 
             <br></br>
             <b>Cloud Pak for Data:</b> Helps conglomerate data sources into one unified designation. Through the use of IBMs 'AI Ladder', customers will be able to consolidate data, cleanse it, govern rules across databases, and simply execute analysis across the data. CP4D is embeded with AI, Analytics, and dashboarding functions.

              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>
             

              &nbsp;● <b>DB2 Warehouse:</b> Data warehouse designed for high-performance, in-database analytics.
              <br></br>
                &nbsp;●<b>DB2 Database Management Console:</b> Administer, monitor, manage, and optimize, your Db2 database from a single web-based console.
               <br></br>               
                &nbsp;●<b>Guardium External S-TAP:</b> Enforce data governance policies, monitor and protect sensitive and regulated data in data sources<br></br>
            
                &nbsp;●<b>MongoDB Enterprise:</b> Scalable, NoSQL database for enterprise deployments.
                <br></br>
                <div className="hr-black"></div>  
                <h3>[Versions]</h3>
             
                &nbsp;● Cloud Pak for Data - <b>Version 3.5.0</b> <br></br>
                &nbsp;● OpenShift Container Platform - <b>Version 4.6</b> <br></br>
                
                
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
            <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer]</h3>
             <h4>Eric Lowry</h4>
             <h5>Client Technical Professional</h5><br></br>

             <h4>[Contact]</h4>
             <b>Email: elowry@us.ibm.com</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br><br></br>
        
          </div>
          <div className=''>
            <div className=''>
            <img
                src={eric}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
                <h4>Cloud Pak 4 Integration is running on OpenShift 4.6</h4> 
             <br></br>
             <b>IBM Cloud Pak for Integration:</b> Helps support the speed, flexibility, security and scale required for integration and digital transformation initiatives. It also comes with a pre-integrated set of capabilities which include API lifecycle, application and data integration, messaging and events, high-speed transfer and integration security.
              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>
             
                &nbsp;● API Connect<br></br>
                &nbsp;● Data Power Gateaway<br></br>
                <div className="hr-black"></div>  
                <h3>[Versions]</h3>
             
                &nbsp;● Lopsum ipsum <br></br>
                &nbsp;● Lopsum ipsum <br></br>
                
                
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
      </div>
    
  );
};

export default ClustersInformationRow;

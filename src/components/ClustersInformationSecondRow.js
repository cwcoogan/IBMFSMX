import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import jonathanT from "../images/profile-pic/jonathan-tomasulo.png"
import douglas from "../images/profile-pic/douglas-freeby.png"
import robert from "../images/profile-pic/robert-pugh.png"

const ClustersInformationSecondRow = () => {
  return (
    <div className='row-container container-fluid'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image security' />
        <div className='title'>Cloud Pak for Security</div>
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
            <div className="header modalText2"> Cloud Pak for Security </div>
            
            <div className="content modalText">
            <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer]</h3>
             <h4>Jonathan Tomasulo</h4>
             <h5>Client Technical Professional</h5><br></br>
             <h4>[Contact]</h4>
             <b>Email: jptomasu@us.ibm.com</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br><br></br>
          </div>
          <div className=''>
            <div className=''>
            <img
                src={jonathanT}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
                <h4>Cloud Pak 4 Security is running on OpenShift 4.6</h4> 
             <br></br>
             <b>Cloud Pak for Security:</b> Helps accelerate security from Threat Management to IAM. CP4S allows users to connect to their SIEM, Ticketing, or logging systems to find threats in real-time, and execute them through the SOAR platform. With automation embedded, CP4S is helping customers quickly execute and prevent threats in real-time.
              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>

                &nbsp;● <b>Data Explorer:</b> Search and analyze all of your data from one unified UI<br></br>
                &nbsp;● <b>Threat Intelligence Insights:</b> Identify your most impactful threat with relevant threat intelligence <br></br>
                &nbsp;● <b>Orchestration & Automation:</b> Increase cyber resilience and incident response speed<br></br>
                &nbsp;● <b>User Behavior Analytics:</b> Detect and analyze insider threat<br></br>
                &nbsp;● <b>Qradar Proxy:</b> Connect to a Qradar deployment to allow IBM CP4S to connect to Qradar apps and API from that deployment <br></br>
                <br></br><h3>[Beta Applications]</h3>
                &nbsp;● <b>Risk Manager:</b> Visualize correlated security risks across domains <br></br>
                &nbsp;● <b>Threat Investigiator:</b> Automatically investigate and prioritize cases<br></br>

                <div className="hr-black"></div>  
                <h3>[Versions]</h3>
             
                &nbsp;● Cloud Pak for Security - <b>Version 1.5.0</b> <br></br>
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
        <div className='image insights' />
        <div className='title'>Guardium Insights</div>
        {/* <div className='text'>
        Learn how the foods you consume can affect the environment.
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
            <div className="header modalText2"> Guardium Insights </div>
            
            <div className="content modalText">
            <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer(s)]</h3>
             <h4>Douglas Freeby</h4>
             <h5>Client Technical Professional</h5><br></br>
             
             <h4>Robert Pugh</h4>
             <h5>Client Technical Professional</h5><br></br>
             
           
             
             <h4>[Contact]</h4>
             <b>Email: ddfreeby@us.ibmcom</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br>
             <b>Email: repugh@us.ibm.com</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br><br></br>
             
          </div>
          <div className='mt-3'>
            <div className=''>
            <img
                src={douglas}
                className=''
                alt='Sitting on questionnaire'
              />
              &nbsp;&nbsp;&nbsp;
              <img
                src={robert}
                className=''
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
                <h4>Guardium Insights is running on OpenShift 4.6</h4> 
             <br></br>
             <b>Guardium Insights:</b> Built on containerized architecture, Guardium Insights is a lightweight-but-powerful platform that can flexibly deploy wherever an organization needs - aligning to data security goals without hindering business objectives in the cloud.
              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>
             
                &nbsp;●<b> Guardium External S-TAP:</b> Enforce data governance policies, monitor and protect sensitive and regulated data in data sources<br></br>

               {/* // &nbsp;● TBD<br></br>
                &nbsp;● TBD<br></br> */}
                <div className="hr-black"></div>  
                <h3>[Versions]</h3>
             
                &nbsp;● Guardium Insights - <b>Version: 2.5.1</b> <br></br>
                &nbsp;● OpenShift Container Platform - <b>Version: 4.6</b> <br></br>
                
               
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

export default ClustersInformationSecondRow;

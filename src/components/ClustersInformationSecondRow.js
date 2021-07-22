import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
             Cloud Pak 4 Security is running on OpenShift 4.6 <br>
            </br><br></br>
              [ABOUT]
              <br /><br></br>
              Installer: 
              <h1 className='hr-purple2'></h1> 
              Jonathan Tomasulo<br></br><br></br>
              {/* <br /> */}
              Installed Services:<br></br>
              <h1 className='hr-purple2'></h1> 
                Threat Intelligence Insights<br></br>
                Data Explorer<br></br>
                SOAR<br></br>
                Risk Manager<br></br>
                Guardium Insights S-Tap<br></br>
              <br></br>
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
             Guardium Insights is running on OpenShift 4.6 <br>
            </br><br></br>
              [ABOUT]
              <br /><br></br>
              Installer: 
              <h1 className='hr-purple2'></h1> 
              Douglas Freeby + Robert Pugh<br></br><br></br>
              {/* <br /> */}
              Installed Services:<br></br>
              <h1 className='hr-purple2'></h1> 
                Guardium S-Tap<br></br>
                TBD<br></br>
                TBD<br></br>
                TBD<br></br>
              <br></br>
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

export default ClustersInformationSecondRow;

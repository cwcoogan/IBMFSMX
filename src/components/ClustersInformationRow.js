import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ClustersInformationRow = () => {
  return (
    <div className='row-container container-fluid installations-row'>
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
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            {/* <div className="display-4 font-weight-bold text-center mb-3"> Cloud Pak for Data </div> */}
            <div className="header modalText2"> Cloud Pak for Data </div>
            <h1 className='hr-purple'></h1>
            <div className="content modalText">
            {/* <div className="content font-weight-bold"> */}
               Cloud Pak 4 Data is running on OpenShift 4.6 <br>
              </br><br></br>
              [ABOUT]
              <br /><br></br>
              Installer:
              <h1 className='hr-purple2'></h1> 
              Rajesh Kartha<br></br><br></br>
              {/* <br /> */}
              Installed Services:<br></br>
              <h1 className='hr-purple2'></h1> 
                DB2 <br></br>
                MongoDB<br></br>
                Guardium S-Tap<br></br>
              <br />
              Looking for services to be added?
              
              <br></br>
              
            </div>
            <div className="actions">
              <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/contact';
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
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header modalText2"> Cloud Pak for Integration </div>
            <h1 className='hr-purple'></h1>
            <div className="content modalText">
             Cloud Pak 4 Integration is running on OpenShift 4.6 <br>
            
            </br><br></br>
              [ABOUT]
              <br /><br></br>
              ● Installer: Eric Lowery<br></br><br></br>
              {/* <br /> */}
              Installed Services:<br></br>
                ● API Connect <br></br>
                ● Data Power Gateway<br></br><br></br>
                
                Looking for services to be added?
              
              <br></br>
           
            </div>
            <div className="actions">
              <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/contact';
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

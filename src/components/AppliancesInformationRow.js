import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const AppliancesInformationRow = () => {
  return (
    <div className='row-container container-fluid installations-row'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image guardiumapp' />
        <div className='title'>Guardium Appliances</div>
        {/* <div className='text'>
        Learn how shopping affects the environment.
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
            <div className="header modalText2"> Guardium Appliances </div>
            <h1 className='hr-purple'></h1>
            <div className="content modalText">
             Guardium Appliances is running on X.X.X <br>

            </br><br></br>
              [ABOUT]
              <br /><br></br>
              ● Installer: Douglas Freeby + Robert Pugh<br></br><br></br>
              {/* <br /> */}
              Installed Appliances:<br></br>
                ● Gaurdium Data Protection<br></br>
                ● TBD<br></br>
                ● TBD<br></br>
                ● TBD<br></br>
              <br></br>
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
        <div className='image sterling' />
        <div className='title'>Sterling Appliances</div>
        {/* <div className='text'>
        Learn how apparel production affects the environment.
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
            <div className="header modalText2"> Sterling Appliances </div>
            <h1 className='hr-purple'></h1>
            <div className="content modalText">
             Sterling Appliances is running on X.X.X <br>

              </br><br></br>
              [ABOUT]
              <br /><br></br>
              ● Installer: Jerry Steward<br></br><br></br>
              {/* <br /> */}
              Installed Appliances:<br></br>
                ● Sterling File Gateway<br></br>
                ● Sterling Secure Proxy<br></br>
              <br></br>
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

export default AppliancesInformationRow;

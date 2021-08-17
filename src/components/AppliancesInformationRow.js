import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import douglas from "../images/profile-pic/douglas-freeby.png"
import robert from "../images/profile-pic/robert-pugh.png"
import jerry from "../images/profile-pic/jerry-steward.png"


const AppliancesInformationRow = () => {
  return (
    <div className='row-container container-fluid installations-row'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image insights' />
        <div className='title'>Guardium Appliances</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header modalText2"> Guardium Appliances </div>
            
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
                <h4>Guardium Appliances is running on X.X.X</h4> 
             <br></br>
              [ABOUT]
              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>
             
                &nbsp;● Guardium Data Protection<br></br>
                &nbsp;● TBD<br></br>
                &nbsp;● TBD<br></br>
                &nbsp;● TBD<br></br>
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
      <Popup
        trigger={<div className='image-container'>
        <div className='image integration' />
        <div className='title'>Sterling Appliances</div>
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
            <div className="header modalText2"> Sterling Appliances </div>
            
            <div className="content modalText">
            <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-6 txt-md-left'>
  
            <h3>[Installer]</h3>
             <h4>Jerry Steward</h4>
             <h5>Client Technical Professional</h5><br></br>
             
             <h4>[Contact]</h4>
             <b>Email: jjstewar@us.ibm.com</b><br></br>
             <b>Phone: xxx-xxx-xxx</b><br></br><br></br>
            
          </div>
          <div className=''>
            <div className=''>
            <img
                src={jerry}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
          </div>

          <div className="hr-black"></div>
                <h4>Sterling Appliances is running on X.X.X</h4> 
             <br></br>
              [ABOUT]
              <br />

          <div className="hr-black"></div>
            {/* <div className="content font-weight-bold"> */}
               
              <h3>[Installed Applications]</h3>
             
                &nbsp;● Sterling File Gateway<br></br>
                &nbsp;● Sterling Secure Proxy<br></br>
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

export default AppliancesInformationRow;

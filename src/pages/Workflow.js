import React from 'react';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const Workflow = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Workflow
              </h1>
              <h1 className='hr-purple'>
              </h1>
            </div>
          </div>
        </div>
      </div> 

      <div className='row-container container-fluid'>
        <div id="familyTree">
	        <div class="generation" id="grandParents">
		        <div class="pair">
			        <div class="card-b">Mobile UI User</div>
			        <div class="card-b">Web App User</div>
		        </div>
	        </div>

          <div class="generation" id="parents">
		        <div class="card-y">Open Application</div>
	        </div>
	
	      <Popup
          trigger={<div className='generation' id='parents'>
          <div className='card-y-h'>Access API</div>
    
          </div>}
          modal
          nested
        >
          {close => (
            <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
              <button className="close" onClick={close}>
                &times;
              </button>
            
              <div className="header"> Access API </div>
              <div className="content">
            
                Example Blog Title<br></br>
           
                Looking for services to be added?
              
                <br></br>
              
              </div>
              <div className="actions">
                
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

	      <div class="generation" id="parents">
		      <div class="card-g">Account Authorization</div>
	      </div>
	
	      <div class="generation" id="parents">
		      <div class="card-b">
            <div class="row-container">
              <div class="left">Deposit <br></br> Withdraw <br></br>Transfer</div>
              <div class="center">Audit <br></br> B2C Transaction <br></br> B2B Transaction</div>
              <div class="right">Account Creation <br></br> Loans <br></br> Investing</div>
            </div>
          </div>
	      </div>

        <Popup
          trigger={<div className='generation' id='parents'>
            <div className='card-g-h'>Access Database</div>
    
          </div>}
          modal
          nested
        >
          {close => (
            <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
              <button className="close" onClick={close}>
                &times;
              </button>
            
              <div className="header"> Access Database </div>
              <div className="content">
            
                Example Blog Title<br></br>
           
                Looking for services to be added?
              
                <br></br>
              
              </div>
              <div className="actions">
                
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
          trigger={<div className='generation' id='parents'>
          <div className='card-b-h'>Secure File Transfer</div>
    
          </div>}
          modal
          nested
        >
          {close => (
            <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
              <button className="close" onClick={close}>
                &times;
              </button>
            
              <div className="header"> Secure File Transfer </div>
              <div className="content">
            
                Example Blog Title<br></br>
           
                Looking for services to be added?
              
                <br></br>
              
              </div>
              <div className="actions">
                
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
	
        <div class="generation" id="child">
		      <div class="card-y">Request Successful</div>
	      </div>

        <div id="familyTree">
	        <div class="generation" id="grandParents">
			      <div class="card-b">IT Dept.</div>
          </div>

          <div class="generation" id="parents">
		        <div class="card-g">Employee VPN Authorization</div>
	        </div>

          <div class="generation" id="parents">
		        <div class="card-y">Edit/Open Application</div>
	        </div>

          <Popup
            trigger={<div className='generation' id='parents'>
            <div className='card-y-h'>Edit/Incorporate API</div>
    
            </div>}
            modal
            nested
          >
            {close => (
              <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
                <button className="close" onClick={close}>
                  &times;
                </button>
            
                <div className="header"> Edit/Incorporate API </div>
                <div className="content">
            
                  Example Blog Title<br></br>
           
                  Looking for services to be added?
              
                  <br></br>
              
                </div>
                <div className="actions">
                
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
            trigger={<div className='generation' id='parents'>
            <div className='card-b-h'>Traffic & Log Monitoring</div>
    
            </div>}
            modal
            nested
          >
            {close => (
              <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
                <button className="close" onClick={close}>
                  &times;
                </button>
            
                <div className="header"> Traffic & Log Monitoring </div>
                <div className="content">
            
                  Example Blog Title<br></br>
           
                  Looking for services to be added?
              
                  <br></br>
              
                </div>
                <div className="actions">
                
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
            trigger={<div className='generation' id='parents'>
            <div className='card-g-h'>Download Secure Reports</div>
    
            </div>}
            modal
            nested
          >
            {close => (
              <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
                <button className="close" onClick={close}>
                  &times;
                </button>
            
                <div className="header"> Download Secure Reports </div>
                <div className="content">
            
                  Example Blog Title<br></br>
           
                  Looking for services to be added?
              
                  <br></br>
              
                </div>
                <div className="actions">
                
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

          <div class="generation" id="parents">
		        <div class="card-b">Download Successful</div>
	        </div>

        </div>

	     </div>
      </div>
    </div>
  );
};

export default Workflow;

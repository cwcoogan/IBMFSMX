import React from 'react';
import 'reactjs-popup/dist/index.css';

const Workflow = () => {
  return (
      <div>
      
      {/* clusters */}
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
	
	<div class="generation" id="parents">
		<div class="card-y">Access API</div>
	</div>

	<div class="generation" id="parents">
		<div class="card-g">Account Authorization</div>
	</div>
	
	<div class="generation" id="parents">
		<div class="card-b">Deposit <br></br> Withdraw <br></br>Transfer</div>
	</div>

	<div class="generation" id="parents">
		<div class="card-g">Access Database</div>
	</div>

<div class="generation" id="parents">
		<div class="card-b">Secure File Transfer</div>
	</div>
	
<div class="generation" id="child">
		<div class="card-y">Request Successful</div>
	</div>
	</div> 
    </div>

    

  );
};

export default Workflow;

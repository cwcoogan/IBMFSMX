import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const AppliancesInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image shopping' />
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
            <div className="display-4 font-weight-bold text-center mb-3"> Guardium Appliances </div>
            <div className="content font-weight-bold">
            🍃 Information to be updated<br>
              </br>
              <br />
              ● TBD<br>
              </br>
              {/* <br /> */}
              ● TBD<br>
              </br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
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
        <div className='image clothing' />
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
            <div className="display-4 font-weight-bold text-center mb-3"> Sterling Appliances </div>
            <div className="content font-weight-bold">
            🍃 Information to be updated<br>
              </br>
              <br />
              ● TBD<br>
              </br>
              {/* <br /> */}
              ● TBD<br>
              </br>
              <br />
            </div>
            <div className="actions">
              <button
                className="button"
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

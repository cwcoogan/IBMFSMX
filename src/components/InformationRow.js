import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const InformationRow = () => {
  return (
    <div className='row-container fluid-container home-row'>
          <Popup
        trigger={<div className='image-container-home'>
        <div className='image monitor' />
        <div className='homePageText'>What are Cloud Paks?</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> What are Cloud Paks?</div>
            <div className="content font-weight-bold">
            • Team created the environment<br>
              </br>
              <br />
              • Team began installing cloud paks<br>
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
        trigger={<div className='image-container-home'>
        <div className='image learn' />
        <div className='homePageText'>Cloud Paks Benefits</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> Cloud Paks Benefits</div>
            <div className="content font-weight-bold">
            • Team created the environment<br>
              </br>
              <br />
              • Team began installing cloud paks<br>
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
        trigger={<div className='image-container-home'>
        <div className='image improve' />
        <div className='homePageText'>Impacts of Cloud Paks</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> Impacts of Cloud Paks</div>
            <div className="content font-weight-bold">
            • Team created the environment<br>
              </br>
              <br />
              • Team began installing cloud paks<br>
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
        trigger={<div className='image-container-home'>
        <div className='image learn2' />
        <div className='homePageText'>How Cloud Paks Help</div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> How Cloud Paks Help</div>
            <div className="content font-weight-bold">
            • Team created the environment<br>
              </br>
              <br />
              • Team began installing cloud paks<br>
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

export default InformationRow;

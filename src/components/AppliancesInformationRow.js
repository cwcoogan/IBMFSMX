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
            <div className="display-4 font-weight-bold text-center mb-3"> Cloud Pak for Data </div>
            <div className="content font-weight-bold">
            🍃 Reduce the amount of stuff you purchase and consider using recycled items when possible.<br>
            </br>
              <br />
              ● Installer: Rajesh Kartha<br>
              </br>
              {/* <br /> */}
              ● Install Completed<br>
              </br>
              {/* <br /> */}
              ● CP4D CoreOS: 4.6
              <br>
              </br>
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
            <div className="display-4 font-weight-bold text-center mb-3"> Clothing Tips </div>
            <div className="content font-weight-bold">
            🍃 Washing your clothes in cold water could save up to 500 pounds of carbon dioxide. Using cold water instead of hot/warm water can also clean your clothes better.<br>
              </br>
              <br />
            🍃 Buying secondhand clothes can save the resources used to otherwise create a new clothing piece. Shopping for second hand items can also save you more money.<br>
              </br>
              <br />
              🍃 When buying new clothes, look for items that are made with eco-friendly and natural fabrics. Some of them include, bamboo, silk, hemp, and organic cotton.<br>
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

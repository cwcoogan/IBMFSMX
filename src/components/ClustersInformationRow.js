import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ClustersInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
      <Popup
        trigger={<div className='image-container'>
        <div className='image household' />
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
            <div className="display-4 font-weight-bold text-center mb-3"> Household Tips </div>
            <div className="content font-weight-bold">
              🍃 Consider using LED lightbulbs instead of regular lightbulbs. 
			  LED bulbs may cost more but they use a quarter of the energy compared to the regular ones and last up to 25 times longer<br>
              </br>
              <br />
              🍃 Make sure you turn off all electronic devices when not in use and dont forget to turn off the light when leaving your room<br>
              </br>
              <br />
              🍃 If you use the water heater often, try turning down the heater to 120˚F. Doing this can save you roughly 500 pounds of CO2.<br>
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
        <div className='image transportation' />
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
            <div className="display-4 font-weight-bold text-center mb-3"> Cloud Pak for Integration </div>
            <div className="content font-weight-bold">
            Hybrid integration solution that provides an automated and closed-loop lifecycle across
            multiple styles of enterprise intergration.<br>
              </br>
              <br />
              ● Installer: Eric Lowery<br>
              </br>
              {/* <br /> */}
              ● Install Completed<br>
              </br>
              {/* <br /> */}
              ● CP4I CoreOS: 4.6
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
        <div className='image household' />
        <div className='title'>Cloud Pak for Security</div>
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
            <div className="display-4 font-weight-bold text-center mb-3"> Household Tips </div>
            <div className="content font-weight-bold">
              🍃 Consider using LED lightbulbs instead of regular lightbulbs. 
			  LED bulbs may cost more but they use a quarter of the energy compared to the regular ones and last up to 25 times longer<br>
              </br>
              <br />
              🍃 Make sure you turn off all electronic devices when not in use and dont forget to turn off the light when leaving your room<br>
              </br>
              <br />
              🍃 If you use the water heater often, try turning down the heater to 120˚F. Doing this can save you roughly 500 pounds of CO2.<br>
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
        <div className='image food' />
        <div className='title'>Guardium Insights</div>
        {/* <div className='text'>
        Learn how the foods you consume can affect the environment.
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
            🍃 Reduce the amount of food you waste by planning your meals ahead of time, freezing any leftovers, and reusing any leftovers that could be left behind.<br>
            </br>
              <br />
              ● Installer: Jerry Steward<br>
              </br>
              {/* <br /> */}
              ● Install Completed<br>
              </br>
              {/* <br /> */}
              ● OS: RHEL 8.2
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
      </div>
    
  );
};

export default ClustersInformationRow;

import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LearnInformationRow = () => {
  return (
    <div className='row-container container-fluid home-row'>
            <Popup
        trigger={<div className='image-container'>
        <div className='image transportation' />
        <div className='title'>Cloud Pak for Integration</div>
        <div className='text'>
          Learn how your choice of travel can affect the environment.
        </div>
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
        <div className='title'>Household</div>
        <div className='text'>
        Learn how much energy is being used and lower your emissions.
        </div>
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
        <div className='title'>Sterling Appliances</div>
        <div className='text'>
        Learn how the foods you consume can affect the environment.
        </div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="display-4 font-weight-bold text-center mb-3"> Food Tips </div>
            <div className="content font-weight-bold">
            🍃 Reduce the amount of food you waste by planning your meals ahead of time, freezing any leftovers, and reusing any leftovers that could be left behind.<br>
              </br>
              <br />
            🍃 Consider eating more plant-based meals. Meat and dairy are responsible for 14.5% of manmade global greenhouse gas emissions. 
			  You can reduce your carbon footprint by consuming more vegetables, fruits, and grains.<br>
              </br>
              <br />
            🍃 When doing groceries, choose organic and local foods that are in season. 
			  Opting to purchase locally instead of transporting foods from far away will reduce air pollution and cut back on greenhouse emissions.<br>
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

export default LearnInformationRow;

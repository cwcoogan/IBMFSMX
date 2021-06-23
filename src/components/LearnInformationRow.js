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
        <div className='title'>Q1</div>
        <div className='text'>
          Environment Initialized 
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
            <div className="display-4 font-weight-bold text-center mb-3"> Environment Initialized </div>
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
        trigger={<div className='image-container'>
        <div className='image household' />
        <div className='title'>Q2</div>
        <div className='text'>
        Cloud Pak Installation
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
            <div className="display-4 font-weight-bold text-center mb-3"> Cloud Pak Installation </div>
            <div className="content font-weight-bold">
              • Team began to install cloud paks<br>
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
        <div className='title'>Q3</div>
        <div className='text'>
       Data Spin Up
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

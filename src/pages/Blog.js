import React from 'react';
import BloImgFir from '../images/Blog1.png';
import BloImgSec from '../images/Blog2.png';
import BloImgThi from '../images/Blog3.png';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const Blog = () => {
  return (
    <div>
    <div className='container'>
          <div className='row mt-5 hero-row-reverse-mobile home-row '>
            <div className='col-lg-12 txt-md-left'>
              <div className='row mb-3'>
                <h1 className='display-5 font-weight-bold'>
                  Blog & Use Cases
                </h1>
                <h1 className='hr-purple'>
                </h1>
                <h4> <br></br> Here you will find industry specific blogs and use cases from fellow IBMers. 
                  <br></br>Start by selecting an industry: </h4>
              </div>
            </div>
          </div>
      </div>

    <div class="industryboxcontainer">
    <div class="industrybox">  
      <ul> 
        <li>
          <div class="industrybox-content">
          <div class="industrybox img">
          <img
                src={BloImgFir}
              />
          </div>
            <h2 class="date">Banking</h2>
          </div>
        </li>

      </ul>
    </div>
    <div class="industrybox">  
      <ul> 
        <li>
          <div class="industrybox-content">
          <div class="industrybox img">
          <img
                src={BloImgSec}
              />
          </div>
            <h2 class="date">Insurance</h2>
          </div>
        </li>

      </ul>
    </div>
    <div class="industrybox">  
      <ul> 
        <li>
          <div class="industrybox-content">
          <div class="industrybox img">
          <img
                src={BloImgThi}
              />
          </div>
            <h2 class="date">Misc</h2>
          </div>
        </li>

      </ul>
    </div>
    </div>

    <div class = 'container'>
    <div class = 'industrynames'>
        <h1>Banking</h1>
        <h1 className='hr-purple'></h1>
      </div>

    
    <div class="specincontainer">

    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
    </div>

    <div class = 'container'>
    <div class = 'industrynames'>
        <h1>Insurance</h1>
        <h1 className='hr-purple'></h1>
      </div>

    <div class="specincontainer">
    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
    </div>

    <div class = 'container'>
    <div class = 'industrynames'>
        <h1>Misc</h1>
        <h1 className='hr-purple'></h1>
      </div>

    <div class="specincontainer">
    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> Published July 12th 2021</h2>
              <h3> This will be a short intro to the blog with '...' so people
                can click on it and read more
              </h3>
          </li>
        </ul>
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
            
            <div className="header"> Example Blog Title </div>
            <div className="content">
            
            Example Blog Title<br></br>
           
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
    </div>

    </div> 
  );
};

export default Blog;

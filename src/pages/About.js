import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CurrentAboutRow from '../components/CurrentAboutRow';
import LearnInformationSecondRow from '../components/LearnInformationSecondRow';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import aboutFirst from '../images/about1.png';
import aboutTwo from '../images/about3.png';
import 'reactjs-popup/dist/index.css';

const Tips = () => {
  return (
    <div>

  <div class="boxcontainer">
    <div class="box">
      <ul> 
        <li>
          <div class="box-content">
            <h2 class="date">About</h2>
            <p>An awesome webiste to show off environment </p>
          </div>
        </li>

      </ul>
  </div>
  <div class="box">
      <ul> 
        <li>
          <div class="box-content">
            <h2 class="date">Mission</h2>
            <p>To sell a lot and make a lot of money </p>
          </div>
        </li>

      </ul>
  </div>
</div>

      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Roadmap
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
        </div>

  <div class="timecontainer">
    <div class="timeline">
      <ul> 
        <li>
          <div class="timeline-content">
            <h1>Environment Initalization</h1>
            <h2 class="date">Q1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
              corrupti labore quae quasi blanditiis maiores totam excepturi dicta.
              Dolorem architecto fugiat culpa, maiores neque similique asperiores sunt soluta ab ratione.</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Product Installation</h1>
            <h2 class="date">Q2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
              corrupti labore quae quasi blanditiis maiores totam excepturi dicta.
              Dolorem architecto fugiat culpa, maiores neque similique asperiores sunt soluta ab ratione.</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Data Implementation</h1>
            <h2 class="date">Q3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
              corrupti labore quae quasi blanditiis maiores totam excepturi dicta.
              Dolorem architecto fugiat culpa, maiores neque similique asperiores sunt soluta ab ratione.</p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Environment Training</h1>
            <h2 class="date">Q4</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
              corrupti labore quae quasi blanditiis maiores totam excepturi dicta.
              Dolorem architecto fugiat culpa, maiores neque similique asperiores sunt soluta ab ratione.</p>
          </div>
        </li>
      </ul>
  </div>
</div>

    </div>

  );
};

export default Tips;

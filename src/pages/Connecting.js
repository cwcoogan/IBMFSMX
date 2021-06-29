import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import ConImgFir from '../images/Connect1.png';
import ConImgSec from '../images/Connect2.png';
import ConImgThi from '../images/Connect3.png';
import ConImgFou from '../images/Connect4.png';
import ConImgFiv from '../images/Connect5.png';
import ConImgSix from '../images/Connect6.png';
import 'reactjs-popup/dist/index.css';

const Connecting = () => {
  return (
    <div>
      <div className='connectboxcontainer'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Connecting to the Environment
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
        </div>

    <div class="connectboxcontainer">
  
    <div class="connectbox">  
      <ul> 
        <li>
          <div class="connectbox-content">
          <div class="connectbox img">
          <img
                src={ConImgFir}
              />
          </div>
            <h2 class="date">Step 1</h2>
            <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
          </div>
        </li>

      </ul>
    </div>
   
    <div class="connectbox">
      <ul> 
        <li>
          <div class="connectbox-content">
          <div class="connectbox img">
          <img
                src={ConImgSec}
              />
          </div>
            <h2 class="date">Step 2</h2>
            <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
          </div>
        </li>

      </ul>
    </div>
   
    <div class="connectbox">
      <ul> 
        <li>
          <div class="connectbox-content">
          <div class="connectbox img">
          <img
                src={ConImgThi}
              />
          </div>
            <h2 class="date">Step 3</h2>
            <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
          </div>
        </li>

      </ul>
    </div>

    </div>

    <div class="connectboxcontainer">
  
  <div class="connectbox">  
    <ul> 
      <li>
        <div class="connectbox-content">
        <div class="connectbox img">
          <img
                src={ConImgFou}
              />
          </div>
          <h2 class="date">Step 4</h2>
          <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
        </div>
      </li>

    </ul>
  </div>
 
  <div class="connectbox">
    <ul> 
      <li>
        <div class="connectbox-content">
        <div class="connectbox img">
          <img
                src={ConImgFiv}
              />
          </div>
          <h2 class="date">Step 5</h2>
          <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
        </div>
      </li>

    </ul>
  </div>
 
  <div class="connectbox">
    <ul> 
      <li>
        <div class="connectbox-content">
        <div class="connectbox img">
          <img
                src={ConImgSix}
              />
          </div>
          <h2 class="date">Step 6</h2>
          <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
        </div>
      </li>

    </ul>
  </div>

  </div>

    </div> 
  );
};

export default Connecting;

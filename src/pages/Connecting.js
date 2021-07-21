import React from 'react';
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
        <div className='container'>
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

    <div class="connectboxcontainer hero-row-reverse-mobile">
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
            <p>First, you will need to request & log in into the TEC VPN. Request access using this <a href="https://w3.ibm.com/w3publisher/ibm-americas-hccx/tecnet" target="_blank">link </a> 
               (If you already have access, please disregard this step). Follow along the link for instructions on requesting.
              <br></br><br></br><br></br><br></br>
            </p>
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
            <p> You will now access the VPN using AnyConnect. Begin by opening the settings of AnyConnect (Gear on the Bottom Right).
                Then uncheck the option to "Enable automatic VPN server selection". You are now able to type into the VPN box (Left 
                of Connect Button). Type in "ralvpn.tec.ihost.com". Now click the connect button and enter username/password when prompted. 
              <br></br><br></br><br></br><br></br>  </p>
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
            <h2>Step 3</h2>
            <p> Now you will be connecting to the various Cloud Paks. First, ensure you are connected 
                to the TEC VPN. Then use the following links & account information
                to access each instances. </p>
                
          </div>
        </li>

      </ul>
    </div>

    </div>

    <div class="connectboxcontainer hero-row-reverse-mobile">
  
    <div class="cloudboxcontainer">
      <div class="cloudbox">  
        <ul> 
          <li>
            <div class="cloudbox-content">
            <div class="cloudbox img">
            <img
                 src={ConImgFou}
                />
            </div>
            <a href="ibm.biz/CP4DFSM">
              <div class="link">
                <h2>Cloud Pak for Data</h2>
              </div>
            </a>
              <p> <div class="tap"> 
                Username: IBM<br></br>
                Password: IBM<br></br>
                </div>
              Enjoy hands on experince with CP4D!
              <br></br><br></br><br></br><br></br>  </p>
            </div>
        </li>
      </ul>
    </div>

    <div class="cloudbox">  
        <ul> 
          <li>
            <div class="cloudbox-content">
            <div class="cloudbox img">
            <img
                 src={ConImgFou}
                />
            </div>
            <a href="http://ibm.biz/FSMCP4S">
              <div class="link">
                <h2>Cloud Pak for Secuirty</h2>
              </div>
            </a>
              <p> <div class="tap"> 
                Username: IBM<br></br>
                Password: IBM<br></br>
                </div>
              Enjoy hands on experince with CP4S!
              <br></br><br></br><br></br><br></br>  </p>
            </div>
        </li>
      </ul>
    </div>

    <div class="cloudbox">  
        <ul> 
          <li>
            <div class="cloudbox-content">
            <div class="cloudbox img">
            <img
                 src={ConImgFou}
                />
            </div>
            <a href="http://ibm.biz/FSMInsights">
              <div class="link">
                <h2>Guardium Insights</h2>
              </div>
            </a>
              <p> <div class="tap"> 
                Username: IBM<br></br>
                Password: IBM<br></br>
                </div>
              Enjoy hands on experince with Insights!
              <br></br><br></br><br></br><br></br>  </p>
            </div>
        </li>
      </ul>
    </div>

    </div>
 


  </div>

    </div> 
  );
};

export default Connecting;

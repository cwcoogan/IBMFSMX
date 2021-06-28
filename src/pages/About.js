import React from 'react';
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
            <p>The IBM FSMX Environment is an internal multi-cluster environment, running CP4S, CP4D, CP4I and Guardium Insights. The environment also hosts, Guardium Data Protection and Sterling Appliances, under Sterling File Gateway and Secure Proxy.<br></br><br></br><br></br><br></br>  </p>
          </div>
        </li>

      </ul>
  </div>
  <div class="box">
      <ul> 
        <li>
          <div class="box-content">
            <h2 class="date">Mission</h2>
            <p>Our mission is to use this environment to create a 'use-case library' for the Financial Market to show off the integration between product sets to shorten PoC Windows. Tech Reps, and Architects will have full access to this environment to host their product demonstrations for clients, and allow them to learn more about other product sets and OpenShift.</p>
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
            <p> In the first quarter, we initiated the launch of the IBM Financial Service Market Experience
              (FSMX). The first multi-cluster environment, dedicated to the Financial Market to help train 
              Tech Reps and Architects on OpenShift concepts, cross-brand training, and product integrations.
              Tech Reps and Architects will be able to use the IBM FSMX Environment as a dedicated server for hosting
              product demonstrations and to shorten PoC windows.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Product Installation</h1>
            <h2 class="date">Q2</h2>
            <p> In Q2, we began carving out space on the HCCX infrastructure used to host our servers. Four
              clusters and two appliances were identified as necessities in the environment. The first products 
              to be integrated were Cloud Pak for Data, Cloud Pak for Security, Cloud Pak for Integration, and 
              Gaurdium Insights. We also included Gaurdium Data Protection, and Sterling File Gateway and Secure Proxy. 
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Data Implementation</h1>
            <h2 class="date">Q3</h2>
            <p> The first component we want to show off to customers is the easibility in product integration. 
              We went ahead and loaded up data into our DB2 database and set up its Management Console. During this phase, 
              we connected all components to one another, CP4D to CP4S, Guardium S-Tap to CP4D (DB2), and to
              it's own Guardium Insights UI to run audit analysis. Now we are ready to input use-cases and get this shown 
              to clients.
              </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <h1>Environment Training</h1>
            <h2 class="date">Q4</h2>
            <p> in Q4, we are ready to input use-cases. The IBM FSMX will be shown off the Financial Market to demonstrate
              IBM product integration and feasability. We want to show how the security components are a necessity, and 
              what will happen when you turn on/off different components. <br></br><br></br>
              
              The FSMX will also hold a magnitude of use-cases, that technical rep's can spin up in an instance to
              demonstrate to clients, and to shorten PoC windows. We will use this environment as an area to promote
              cross-brand training on products, as well as OpenShift concepts, the underlying technology behind IBM Cloud Paks.
           </p>
          </div>
        </li>
      </ul>
  </div>
</div>

    </div>

  );
};

export default Tips;

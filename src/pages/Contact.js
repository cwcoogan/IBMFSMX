import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import contactImgFir from '../images/ContactVisual.png';

const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Contact
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
      </div>  

      <div className="container">
        <div className='row mt-5 hero-row-reverse mobile home-row'>
          <div className='col-lg-6 txt-md-left'>
            <div className='row mb-3'></div>
            <p className='lead font-weight bold'>
              For questions email:
            </p>
            <p className='lead font-weight bold'>
              ● Chase Coogan: chase.coogan@ibm.com<br></br>
              ● John Lucas: john.lucas@ibm.com
            </p>
          </div> 
          <div className='col-lg-4'>
            <div className='hero-img-right'>
              <img
                src={contactImgFir}
                className='fluid-img'
                alt='Contact Page Image'
              />
            </div>
          </div> 
        </div>
      </div>

    
      <div className='container'>
        <h1 className='display-5 font-weight-bold'>FAQ</h1>
        <h1 className='hr-purple'> </h1>
      </div>
      <div className='row mt-5 faq-right mobile home-row'>
      <Accordion className='pt-0 pb-0'>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <h5>How do I access the environment?</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Switch lights off! Driving less will reduce the amount of CO2 emitted and it will lessen traffic congestion. 
				Consider taking public transportation, carpooling or riding a bike to your destination.</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>
                🍃 If you are driving, avoid making unnecesarry braking and acceleration. 
				Studies have found that aggressive driving can result in more fuel consumption compared to consistent and calm driving.
              </h6>
            </Card.Body>
          </Accordion.Collapse>
		  <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>
                🍃 If you are going on a long trip, using cruise control can reduce your fuel consumption.
              </h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            <h5>What is a Cloud Pak?</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Consider using LED lightbulbs instead of regular lightbulbs. 
			  LED bulbs may cost more but they use a quarter of the energy compared to the regular ones and last up to 25 times longer.</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Make sure you turn off all electronic devices when not in use and dont forget to turn off the light when leaving your room</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 If you use the water heater often, try turning down the heater to 120˚F. Doing this can save you roughly 500 pounds of CO2.</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='2'>
            <h5>Where can I learn more?</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Reduce the amount of food you waste by planning your meals ahead of time, freezing any leftovers, and reusing any leftovers that could be left behind.</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 Consider eating more plant-based meals. Meat and dairy are responsible for 14.5% of manmade global greenhouse gas emissions. 
			  You can reduce your carbon footprint by consuming more vegetables, fruits, and grains.</h6>
            </Card.Body>
          </Accordion.Collapse>
		  <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>🍃 When doing groceries, choose organic and local foods that are in season. 
			  Opting to purchase locally instead of transporting foods from far away will reduce air pollution and cut back on greenhouse emissions.</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
    </div>  
    </div>

        
  );
};

export default Contact;

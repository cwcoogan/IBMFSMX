import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import contactImgFir from '../images/contact.png';

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
            <p className='lead font-weight-bold'>
              For questions email:
            </p>
            <p className='lead font-weight-bold'>
              ● Chase Coogan: chase.coogan@ibm.com<br></br>
              ● John Lucas: john.lucas@ibm.com
            </p>
          </div> 
          <div className='col-lg-5'>
            <div className='hero-img-right'>
              <img
                src={contactImgFir}
                className='contact-page-img'
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
      <div className='container display-5 mobile contact-row'>
      <Accordion className='pt-0 pb-0'>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <h5>How do I access the environment?</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>IBM IBM IBM IBM IBM IBM</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>
                remove this line if you do not want to seperate paragraphs
              </h6>
            </Card.Body>
          </Accordion.Collapse>
		  <Accordion.Collapse eventKey='0' className='accordion-tips'>
            <Card.Body>
              <h6>
                remove this line if you do not want to seperate paragraphs
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
              <h6>IBM IBM IBM IBM</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>remove this line if you do not want to seperate paragraphs</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='1' className='accordion-tips'>
            <Card.Body>
              <h6>remove this line if you do not want to seperate paragraphs</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className='accordion-section'>
          <Accordion.Toggle as={Card.Header} eventKey='2'>
            <h5>Where can I learn more?</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>IBM IBM IBM IBM IBM</h6>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>remove this line if you do not want to seperate paragraphs</h6>
            </Card.Body>
          </Accordion.Collapse>
		  <Accordion.Collapse eventKey='2' className='accordion-tips'>
            <Card.Body>
              <h6>remove this line if you do not want to seperate paragraphs</h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
       
      </Accordion>
    </div>  
    </div>

        
  );
};

export default Contact;

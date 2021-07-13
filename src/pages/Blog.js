import React from 'react';
import BloImgFir from '../images/Blog1.png';
import BloImgSec from '../images/Blog2.png';
import BloImgThi from '../images/Blog3.png';
import BloDocFir from '../images/CloudPakOne.pdf';
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
                  Blog & White Papers
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
            <h2 class="date">General</h2>
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
                src={BloImgThi}
              />
          </div>
            <h2 class="date">Insurance</h2>
          </div>
        </li>

      </ul>
    </div>
    </div>

    <div class = 'container'>
    <div class = 'industrynames'>
        <h1>General</h1>
        <h1 className='hr-purple'></h1>
      </div>

    
    <div class="specincontainer">

    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Tech Tuesday Kick-Off!</h1>
              <h2> Published: 7/13/2021</h2>
              <h3> Check out the very first of many blogs & 
                hear from our own Technical Leader...
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
            
            <div className="header"> Tech Tuesday Kick-Off </div>
            <div className="content">
            
            Team - <br></br>
            <br></br>
            Welcome to the second half, I hope you are all rejuvenated from the Holiday 
            break and are ready for another great quarter. My name is Chase Coogan, and 
            I am a Cross Brand Cloud Pak Technical Leader in the Financial Market. My 
            team and I are in charge of leading the project to bring to life a 
            multi-cluster environment consisting of several Cloud Paks to show the 
            ease of integration and to give a tangible asset to our technical team for 
            customer demonstrations. I am writing to you to shed light on the business 
            value Cloud Paks have on our customers, so please join me on this journey, 
            and welcome to Tech Tuesdays! <br></br>
            <br></br>
            Through Tech Tuesdays, I aim to instill the business value in each of you 
            behind moving to Cloud Paks, as well as to provide customer feedback, and 
            share success stories. Of course, we care about the quantified data, so I 
            will be sure to back my statements up with factual statistics. As Cloud Paks
            continue to evolve, we need to begin having the conversation with clients 
            around if moving to a Cloud Pak is right for them. <br></br>
            <br></br>
            One of the questions that I receive more often than not is why Cloud Paks? 
            And the answer I give is simple, Cloud Paks are an easy to deploy solution, 
            that will allow our customers to easily manage their applications and 
            accelerate development by up to 66%. Sounds like a bunch of buzzwords, 
            doesn’t it? Well, it’s true, the underlying technology gives Developers and 
            their DevOps team more freedom to test new code and features to push to a 
            final application. <br></br>
            <br></br>            
            Afterall, IBM is named a Leader in the 2021 Gartner Magic Quadrant for Cloud 
            AI Developer Services, and a leader in the Forrester Wave: Multicloud 
            Container Development Platforms in 2020. In the 2019 Total Economic Report, 
            Forrester identified the overall cost savings associated with moving to a 
            Cloud Pak, and some of the numbers aren’t so surprising. <br></br>
            <br></br>
            Forrester found savings amongst the infrastructure layer by reducing hardware, 
            cloud and licensing costs. In fact, the total cost of ownership by migrating 
            to a Cloud Pak was reduced by 4%, hardware costs decreased by 44%, and 
            licensing costs went down by 50%. The numbers are staggering, but that is the 
            benefit in moving to a Cloud Pak. <br></br>
            <br></br>
            In summary, customers business models can be complex and implementing a solution 
            to deal with their end-to-end needs can be costly. That is why migrating to a 
            Cloud Pak is an efficient way to scale their business while reducing their TCO. 
            The next time you speak with your clients, be sure to drill in on some of the 
            factual data available to help boost your chance of making it a Cloud Pak deal! <br></br>
            <br></br> 
            Thank you for joining me on the kick-off of Tech Tuesdays, and if you have any 
            questions do not hesitate to contact me via slack, email, or phone. <br></br>
            <br></br>
            Best, <br></br>
            Chase Coogan


              
            </div>
            <div className="actions">
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
              <h1> Cloud Pak One Pager</h1>
              <h2> Published: 7/13/2021</h2>
              <h3> Interested in learning more about Cloud Paks? Check out our one pager...
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
            
            <div className="header"> Cloud Pak One Pager </div>
            <div className="content">
            
            <iframe src={BloDocFir} height='400px' width='600px'>
            </iframe> 
              
              <br></br>
              
            </div>
            <div className="actions">
                
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

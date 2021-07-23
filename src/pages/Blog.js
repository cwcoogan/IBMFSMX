import React from 'react';
import BloDocFir from '../images/TLDR1.png';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const Blog = () => {
  return (
    <div>
      <div className='container'>
            <div className='row mt-5 hero-row-reverse-mobile home-row '>
              <div className='col-lg-12 txt-md-left'>
                  <h1 className='display-5 font-weight-bold'>
                    Blog & White Papers
                  </h1>
                  <h1 className='hr-purple'>
                  </h1>
                  <h4> <br></br> Here you will find industry specific blogs and use cases from fellow IBMers: </h4>
              </div>
            </div>
        </div>


      <div class="container ">
        <div class="columncontainer">
          <div class="columnbox">  
                <div class="columnbox-content">
                  <h2>Technical <br></br> Whitepapers</h2>
                </div>
          </div>

          <div class="columnbox">  
                <div class="columnbox-content">
                  <h2>Business Value <br></br> Whitepapers</h2>
                </div>
          </div>

          <div class="columnbox">  
                <div class="columnbox-content">
                  <h2>TL;DR </h2>
                </div>
          </div>

          </div>

    
    <div class="specincontainer hero-row-reverse-mobile">

    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Why Cloud Paks? </h1>
              <h2> 7/13/2021</h2>
              <h3> Cloud Paks are the future of IBM & the leading
                   way to modernizing business...
              </h3>
          </li>
        </ul>
        </div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            
            <div className="header"> Why Cloud Paks? </div>
            <div className="content">
            
            Team - <br></br>
            <br></br>
            Hope everyone is having a great start to the second half.  I have worked 
            with some of you over the first part of the year but for those who do not
             know me my name is John Lucas.  I am a cross brand Cloud Pak leader within
            the FSM Market.  During the start of the new year, we lead an initiative 
            to build out a sandbox where all within the market could learn about Cloud
            Paks and take this knowledge to your clients.  While access to this 
            environment is coming soon, the learning lessons both during this project
            along with my past experiences will be shared each Tuesday moving forward.  
            Welcome to Tech Tuesdays! <br></br>
            <br></br>
            For the start of this adventure together I would like to answer the question: 
            Why Cloud Paks?  For some you have worked on Cloud Paks sense they have been 
            conceptualized, for others you are just now learning about them within your 
            portfolio. Regardless of where you are in your journey Cloud Paks are the 
            future of IBM and the leading way to modernize a business.  First let’s start 
            by consolidating the marketing and give all of you an easy phrase to convey to 
            clients the importance of Cloud Paks: Cloud Paks are a hybrid cloud platform
            that provide a consistent experience to help modernize the business needs.  
            In short you are able to have the experience of AI, automation and tie in 
            security all in one easy to manage platform as a service. <br></br>
            <br></br>
            For me I have been with Cloud Paks sense the beginning, watching them transform 
            from IBM Cloud to what they are today.  Marketing can be a little optimistic when 
            it comes to the implementation of Cloud Paks within a customer’s environment.  
            Speaking from first-hand experience installing and administering workshops/POCs 
            with Cloud Pak for data I can say installs can be a lot more complex than they appear.  
            The end result though will indeed transform the client’s business and over my time 
            covering Cloud Pak for data it has produced massive success stories and transformed 
            many a client’s business.  The innovation which takes place and the flexibility gained 
            is unmatched when Cloud Paks have been used to solve business needs. <br></br>
            <br></br>            
            In closing Cloud Paks accelerate AI and provide flexibility and confidence while helping
            clients migrate workloads to the cloud.  Customers everyday are moving workloads to the 
            cloud and with IBM Cloud Paks they are now able to do this while consolidating everything 
            to one platform.  Thank you all for your time.  I look forward to passing on my learning 
            lessons through these conversations.  If you have any questions, feel free to reach out 
            to me directly through slack/email/phone.  Happy Tech Tuesday! <br></br>
            <br></br>
            Regards, <br></br>
            John Lucas


              
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
              <h1>Why Cloud Paks? </h1>
              <h2> 7/13/2021</h2>
              <h3> Shedding light on the business value for our customors 
                    & the journey to cloud...
              </h3>
          </li>
        </ul>
        </div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            
            <div className="header"> Why Cloud Paks? </div>
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
              <h1> Why Cloud Paks? </h1>
              <h2> 7/13/2021</h2>
              <h3> Hit your clients with the hard numbers, a one pager 
                   with "easy on the eyes" information & numbers...
              </h3>
          </li>
        </ul>
        </div>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            
            <div className="header"> Why Cloud Paks? </div>
            <div className="content">
            
            <div class="industrybox img">
            <img
                src={BloDocFir}
              />
            </div>
              
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

    <div class = 'container hero-row-reverse-mobile'>
    <div class="specincontainer hero-row-reverse-mobile">
    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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

    <div class = 'container hero-row-reverse-mobile'>
    <div class="specincontainer hero-row-reverse-mobile">
    <Popup
        trigger={<div className='specinbox'>
        <div className='specin-content' />
        <div class ='specin-content'>
        <ul> 
          <li>
              <h1> Example Blog Title</h1>
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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
              <h2> MM DD YYYY</h2>
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
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto"}} >
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

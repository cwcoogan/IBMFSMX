import React from 'react';
import BloDocFir from '../images/blog/TLDR/TLDR1.png';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Test from '../images/CloudPakOne.pdf'

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
        

    {/* START OF TECHNICAL WHITEPAPERS  */}
    <div class="testcontainer hero-row-reverse-mobile">
      <div className="mb-3">
        <div className="ml-5">
        <h1 className='font-weight-bold'>
          Technical <br></br>Whitepapers
        </h1>
        </div>
      
      {/* 8/17 technical blog */}

        <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1> Installing RHOS & Cloud Paks </h1>
             <h2> 8/17/2021</h2>
             <h3> A step-by-step guide to installing Red Hat OpenShift & Cloud Paks
             </h3>
         </li>
       </ul>
       </div>
     </div>}
       modal
       nested
     >
       {close => (
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed" }} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Installing RHOS & Cloud Paks </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1nTuo9TfB3jzXdl1CO2brG7ty7J1zz6HL/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div> 

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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

       {/* 8/10/2021 TECHNICAL WHITEPAPERS BLOG   */}
       <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1> OpenShift vs Kubernetes </h1>
             <h2> 8/10/2021</h2>
             <h3> A technical outlook comparing OpenShift architecture to that of Kubernetes
             </h3>
         </li>
       </ul>
       </div>
     </div>}
       modal
       nested
     >
       {close => (
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed" }} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> OpenShift vs Kubernetes </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/14YEvSDgobI_zzzaNgXxaPxTZ81w3fyKy/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div> 

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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
      
        {/* 7/13/2021 TECHNICAL WHITEPAPERS BLOG   */}
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
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Why Cloud Paks? </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1L_TCt6aG8u4XsBOpI4V3WrAKyyoFmI3V/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div> 

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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

    {/* START OF BUSINESS VALUE WHITEPAPERS   */}
    <div className="mb-3">
    <div className="ml-5">
      <h1 className='font-weight-bold'>
        Business Value <br></br> Whitepapers
      </h1>
      </div>
    
    {/* start here */}

    {/* 8/17 business value whitepaper: */}

    <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1>Why IBM Cloud? </h1>
             <h2> 8/17/2021</h2>
             <h3> How does IBM compare to our competitors? Public Cloud security concerns debunked
             </h3>
         </li>
       </ul>
       </div>
     </div>}
       modal
       nested
     >
       {close => (
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Why IBM Cloud?  </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1h5LfR_H7fEhHEJBq3iGySDlwJP9y1wcX/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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


    {/* 8/10/2021 BUSINESS VALUE WHITEPAPER BLOG */}
    <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1>OpenShift vs Kubernetes </h1>
             <h2> 8/10/2021</h2>
             <h3> Click to learn about the key differentiators in OpenShift vs. Kubernetes deployments
             </h3>
         </li>
       </ul>
       </div>
     </div>}
       modal
       nested
     >
       {close => (
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> OpenShift vs Kubernetes </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1Q37KpwZqn8Ut6hup3kHkEYcoVPSqZS0G/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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

    {/* 7/13/2021 BUSINESS VALUE WHITEPAPER BLOG */}
      <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1>Why Cloud Paks? </h1>
             <h2> 7/13/2021</h2>
             <h3> Shedding light on the business value for our customers 
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
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Why Cloud Paks? </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1I44SqOyHOykAn1jdxYR5kJzMH0w2Ukq3/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  

           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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
    
    
    {/* START OF TL;DR   */}            
    <div className="mb-3">
    <div className="ml-5">
      <h1 className='//font-weight-bold'>
       <br></br>TL;DR<br></br>
      </h1>
      </div>
      
      {/* start here */}

      <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1> Why IBM Cloud? </h1>
             <h2> 8/17/2021</h2>
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
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Why IBM Cloud? </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1n05li906-IQbe71FJeu1aQU4_YIZKdEE/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  
             
             <br></br>
             
           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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


      {/* 8/10/2021 TL;DR BLOG  */}
      <Popup
       trigger={<div className='specinbox'>
       <div className='specin-content' />
       <div class ='specin-content'>
       <ul> 
         <li>
             <h1> OpenShift vs Kubernetes </h1>
             <h2> 8/10/2021</h2>
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
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> OpenShift vs Kubernetes </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1JfAZ5W1q0cmsOebw1FjYyMzO7Gx4Mkqj/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  
             
             <br></br>
             
           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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

     {/* 7/13/2021 TL;DR BLOG  */}
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
         <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
           <button className="close" onClick={close}>
             &times;
           </button>
           
           <div className="header"> Why Cloud Paks? </div>
           <div className="content">
           
           <div className="pdf">
           <iframe src="https://drive.google.com/file/d/1a9il2YGkh-HiGuhlcyTOqgdnhK90x8y0/preview" width="1100" height="1100" allow="autoplay"></iframe>
           </div>  
             <br></br>
             
           </div>
           <div className="actions">
           <button
                className="popup-button"
                onClick={() => {
                  console.log('modal transferred to contact ');
                  window.location.href='/IBMFSMX/#/contact';
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
  </div>
  
  );
};

export default Blog;

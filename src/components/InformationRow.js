import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import IBMRedHat from '../images/image.png';

const InformationRow = () => {
  return (
    <div className='row-container hero-row-reverse-mobile'>
          <Popup
        trigger={<div className='image-container-home'>
        <div className='image-home monitor' />
        <p className='text font-weight-bold'>What are Cloud Paks?</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
            <button className="close" onClick={close}>
              &times;
            </button >
            <div className="header"> What are Cloud Paks?</div>
            <br></br><br></br>
            <h2>IBM Cloud Paks</h2>
            <div className="content modalText">
            
              IBM Cloud Paks are AI powered software that can help organizations build, modernize, 
              and manage applications securely across any cloud. 
              <br></br>
              <br></br>
              They include pre-certified containerized software and foundational services that provide
              customers with a common operations and integration framework. Built on Red Hat OpenShift, 
              the market leader for open source, hybrid cloud platform, they provide a consistent 
              experience for an infrastructure management control plane that includes, AI, Automation and security.
              <br></br>
              <div className="hr-black"></div>
             <h2>Introducing the Six IBM Cloud Paks</h2>
             <br></br>
              <b>IBM Cloud Pak for Applications:</b> Helps accelerate the modernization and building of applications by using built-in developer tools and processes. This includes support for analyzing existing applications and guiding the application owner through the modernization journey. In addition, it supports cloud-native development, microservices functions and serverless computing. Customers can quickly build cloud apps, while existing IBM middleware clients gain the most straightforward path to modernization.
             <br></br> <br></br>
              <b>IBM Cloud Pak for Automation:</b> Helps deploy on clouds where Kubernetes is supported, with low-code tools for business users and near real-time performance visibility for business managers. Customers can migrate their automation runtimes without application changes or data migration, and automate at scale without vendor lock-in.
             <br></br> <br></br>
              <b>IBM Cloud Pak for Integration:</b> Helps support the speed, flexibility, security and scale required for integration and digital transformation initiatives. It also comes with a pre-integrated set of capabilities which include API lifecycle, application and data integration, messaging and events, high-speed transfer and integration security.
              <br></br> <br></br>
              <b>IBM Cloud Pak for Multi-Cloud Management:</b> Helps provide consistent visibility, automation and governance across a range of hybrid, multicloud management capabilities such as event management, infrastructure management, multicluster management, edge management and integration with existing tools and processes.
              <br></br> <br></br>
              <b>IBM Cloud Pak for Security:</b> Helps accelerate security from Threat Management to IAM. CP4S allows users to connect to their SIEM, Ticketing, or logging systems to find threats in real-time, and execute them through the SOAR platform. With automation embedded, CP4S is helping customers quickly execute and prevent threats in real-time.
             <br></br> <br></br>
              <b>IBM Cloud Pak for Data:</b> Helps conglomerate data sources into one unified designation. Through the use of IBMs 'AI Ladder', customers will be able to consolidate data, cleanse it, govern rules across  databases, and simply execute analysis across the data. CP4D  is embeded with AI, Analytics, and dashboarding functions.
              <br></br> <br></br>
              <br />
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
        trigger={<div className='image-container-home'>
        <div className='image-home learn' />
        <p className='text font-weight-bold'>Cloud Paks Benefits</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Cloud Pak Benefits </div><br></br><br></br>
            <h2>Benefits of Cloud Paks</h2>
            <br></br>
            <div className="content modalText">
           
              <b>Modernize with ease:</b> Our pre-integrated containerized software and solutions simplify modernization from 
              the data center all the way to the edge. Take advantage of enterprise-grade, cloud native technologies 
              from IBM and our rich ecosystem of software and SaaS Partners offering access to over 70 ISV tools in Red Hat 
              Marketplace for easy deployment. <br></br><br></br>
             
              <b>Predict outcomes:</b> Become a more predictive enterprise by collecting, organizing, and analyzing data regardless of its type or location. 
              Our data and AI capabilities with cross-industry and vertical AI applications use the power of IBM® Watson® to simplify and 
              accelerate your AI journey. <br></br><br></br>
           
              <b>Automate at scale:</b> Whether it’s automating repetitive tasks or more complex operations, we can help you implement a variety of intelligent workflows
              into your business through machine learning and AI. This helps improve productivity and quality of outcomes for employees and customers alike. <br></br><br></br>
              
              <b>Secure everything:</b> We make security an integral part of our software. Mitigate threats while managing risk and compliance throughout your enterprise all without
              moving your data. We can help you more quickly integrate your existing security tools to gain a deeper understanding of the risks facing your environment,
              orchestrate actions and automate responses. <br></br>
              </div>
   
            
              <br />

        
          
            
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
        trigger={<div className='image-container-home'>
        <div className='image-home improve' />
        <p className='text font-weight-bold'>Cloud Pak Deployment </p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Cloud Pak Deployment </div>
            <br></br><br></br>
            <div className="content modalText">
            <div className="content modalText2">
            <h3>IBM Cloud Paks Deployment Model</h3><br></br></div>
            Cloud Paks are containerized applications that can be deployed locally, on-premise, in the cloud or in an hybrid environment. Below is a surface level guide on how to install RHOS & Cloud Paks, please follow the complete guide in our <a href="/IBMFSMX/#/blog" target="_blank">Blog</a>  section on <i>'Installing RHOS and Cloud Paks'.</i><br></br><br></br>
            
            Installing RHOS begins with sizing your environment. Depending on which Cloud Pak you are aiming to install, read through the configuration guide as you will need to estimate worker/master nodes, CPU, RAM, HDD, and more. <br></br><br></br>
            
            Once RHOS is installed, it is time to set-up your RHEL subscription- this is your license for managing the platform. Login as <i>root</i> in each node to authorize the OpenShift Container Platform installation. <br></br><br></br>

            Third, you will want to set up networking capabilites such as Secure Shell (SSH), which will be used to allow you to jump between the network. After this, you can begin the installation on all master/worker nodes to recieve your OCP UI. <br></br><br></br>

            You can then log-in and create user roles, and create a project to install the correct Cloud Pak. Additional requirements will need to be met so make sure you are sized efficiently to include all operators.<br></br><br></br>
            {/* finish this */}
            
              <br />
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
        trigger={<div className='image-container-home'>
        <div className='image-home learn2' />
        <p className='text font-weight-bold'>Why OpenShift?</p>
      </div>}
        modal
        nested
      >
        {close => (
          <div className="modal" style={{position:"inherit", display:"inherit", overflow:"auto", position:"fixed"}} >
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Why OpenShift?</div>
            
            <div className="content modalText">
             
           
              
              <div className='row mt-5'>
          <div className='col-lg-6 txt-md-left'>
            <div className=''>
            <h2>OpenShift on IBM Cloud <br></br>Vs. Kubernetes</h2><br></br>
            <b>Key Differentiators:</b>
            <ul>
              &nbsp;• Commercialized vs. OpenSource Support <br></br>
              &nbsp;• Stricter Security Requirements on OpenShift <br></br>
              &nbsp;• Simplistic User Interface
            </ul>
            </div>
            
          </div>
          <div className='col-lg-6'>
            <div className='hero-img-center'>
            <img
                src={IBMRedHat}
                className='contact-page-img'
                alt='Sitting on questionnaire'
              />
            </div>
          </div>
        </div>

        <div className="hr-black"></div>
        
        <h4>[OpenSource vs. Commercialized Support]<br></br><br></br></h4>
            <b> - Red Hat OpenShift</b> is IBMs commercialized platform for containerized applications, development, deployment, and management. The infrastructure is based on container technology that allows for simplistic deployment of an application using OS virtualization.
            <br></br><br></br>
            <b>- Kubernetes</b> is an open-source project managed by the Cloud Native Computing Foundation (CNCF) and the Open-Source community. Kubernetes is an open-source project for container application deployment, automation, management, and scaling. 
            <br></br><br></br>
            The key difference between the two is that when deploying in a native Kubernetes environment, users will have to turn towards the open-source community instead of commercialized support. If they cannot upgrade or must patch, the company will rely on their internal team or the community for help. As these new releases and patches roll out, customers deploying containers using OpenShift on IBM Cloud can turn towards Red Hat + IBM for support and services to help with the rollout.  
            <div className="hr-black"></div>
          <h4>[Security Requirements]<br></br><br></br></h4>
          <b>- Kubernetes:</b> offers Role-Based Access Control (RBAC), which is a method for restricting network access based on the user's role. It also supports IAM, and Authentication for additional support in managing users access to data, systems, and resources.
          <br></br><br></br>
          <b>- OpenShift:</b> offers all three, RBAC, IAM and Authentication. OpenShift on IBM Cloud manages large-scale enterprise with lots of vulnerable data and assets. Becuase of this, OpenShift has stricter security requirements. OpenShift on IBM Cloud supports FIPS 140-2 level 4 security protocols, the highest level of security for encrypting sensitive data. It also supports PCI, HIPAA, GDPR, SOC1, SOC2 Type 2, and ISO 27001.
          <div className="hr-black"></div>
          <h4>[User Interface]<br></br><br></br></h4>
          <b>- OpenShift</b> comes equipped with the OpenShift Container Platform (OCP) for managing the cluster through a simplistic web console. Here is where the user can manage their resources, projects, and namespaces. Users can also control their operators and deploy new projects quickly through the easy-to-deploy interface.
          <br></br><br></br>
          - Accessing <b>Kubernetes</b> UI can be a tricky task. In Kubernetes, users must install a separate dashboard and forward their port to the clusters admin service. The user will then have to authenticate against the server by creating a bearer token because there is no login page.<br></br>    

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
      
    </div>
  );
};

export default InformationRow;

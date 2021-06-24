import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TeamInfoRow from '../components/TeamInfoRow';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import teamImgHat from '../images/TeamHatIcon.png';
import teamImgCircle from '../images/pictureIconTeam.png';

const Team = () => {
  return (
    <div>
     <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
                Project Leads
              </h1>
              <h1 className='hr-purple'>
                
              </h1>
  
            </div>
            
          </div>
        </div>

        {/*project leads*/}
        <div className='team-row-container'>
          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Chase Coogan</div>
          
          </div>

          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>John Lucas</div>
          
          </div>

          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Matt Konwiser</div>
          
          </div>
        </div>
        

        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
                Environment Configuration
              </h1>
              <h1 className='hr-purple'>
                
              </h1>
  
            </div>
          </div>
        </div>

        {/* environment configuration name changes will be located here and style in utilities.scss*/}
        <div className='team-row-container'>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Duane Almeter<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Rich Russo<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Anon Person<br></br>
              -
            </p>
          </div>
          {/* second row with different classes for now*/}
          <div className='team-row-container'>
            <img
              src={teamImgCircle}
              className='second-team-image'
              alt='Cicle Icons'
            
            />
            <p className='second-text-margin bold'>
              New Column<br></br>
              -
            </p>
          </div>

        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
                Architect/Installers
              </h1>
              <h1 className='hr-purple'>
                
              </h1>
  
            </div>
          </div>
        </div>

        {/* environment configuration name changes will be located here and style in utilities.scss*/}
        <div className='team-row-container'>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Chris Cardran<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Christopher Suman<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              David Gibson<br></br>
              -
            </p>
          </div>
          {/* second row*/}
          <div className='team-row-container'>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Douglas Freeby<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Christopher Liccardi<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Jerry Steward<br></br>
              -
            </p>
          </div>
          {/* third row*/}
          <div className='team-row-container'>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Rajesh Kartha<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
            Jonathan Tomasulo<br></br>
              -
            </p>
            <img
              src={teamImgCircle}
              className='team-image'
              alt='Cicle Icons'
            />
            <p className='text-margin bold'>
              Robert Pugh<br></br>
              -
            </p>
          </div>

        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
                Interns
              </h1>
              <h1 className='hr-purple'>
                
              </h1>
  
            </div>
          </div>
        </div>

        {/* interns/webdev*/}
        <div className='team-row-container'>
          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Eduardo Gomez</div>
          
          </div>

          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Emily Placet</div>
          
          </div>

          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Alejandro Obrador</div>
          
          </div>
        </div>
        
        <div className='team-row-container'>
          <div className='image-container'>
          <div className='image profilepic'/>
            <div className='title'>Bharath Kaimal</div>
          
          </div>

          
        </div>

      </div>
      
    </div>

  );
};

export default Team;

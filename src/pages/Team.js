import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TeamInfoRow from '../components/TeamInfoRow';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';

const Team = () => {
  return (
    <div>
     <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
                Team
              </h1>
              <h1 className='hr'>
                
              </h1>
  
            </div>
          </div>
        </div>
        <TeamInfoRow />
      </div>
      
    </div>

  );
};

export default Team;

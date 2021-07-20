import React from 'react';
import ClustersInformationRow from '../components/ClustersInformationRow';
import ClustersInformationSecondRow from '../components/ClustersInformationSecondRow';
import AppliancesInformationRow from '../components/AppliancesInformationRow';
import 'reactjs-popup/dist/index.css';

const Installations = () => {
  return (
    <div>
      {/* <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile home-row '>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Installations
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
      </div>  */}

      {/* clusters */}
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Clusters
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
      </div> 

      <ClustersInformationRow />
      <ClustersInformationSecondRow />

      {/* appliances */}
      <div className='container'>
        <div className='row mt-5 hero-row-reverse-mobile'>
          <div className='col-lg-12 txt-md-left'>
            <div className='row mb-3'>
              <h1 className='display-5 font-weight-bold'>
              Appliances
              </h1>
              <h1 className='hr-purple'>
            
              </h1>
            </div>
          </div>
        </div>
      </div> 

      <AppliancesInformationRow />
      
    </div>

  );
};

export default Installations;

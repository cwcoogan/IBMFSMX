import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../images/ibm-grey-logo.png';

const Footer = () => {
  return (
    <footer className='footer text-center py-3'>
      <div className='container'>
        <Link to='/'>
          <img
            src={logoImg}
            alt='IBM logo'
            className='footer__logo'
          />
        </Link>
        <p>Made by IBM FSMX Experience</p>
      </div>
    </footer>
  );
};

export default Footer;

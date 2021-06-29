import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../images/IBM_logo_pos_RGB.png';

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
        <p>© IBM FSM Experience 2021 </p>
      </div>
    </footer>
  );
};

export default Footer;

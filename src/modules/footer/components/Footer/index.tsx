import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as InstagramIcon } from '../../../../assets/img/instagram.svg';
import { ReactComponent as VkIcon } from '../../../../assets/img/vk.svg';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a className="footer__phone" href="tel:88005553535">
          <div>
            <FontAwesomeIcon className="footer__phone-icon" icon={faPhone} />
            <span>8-800-555-35-35</span>
          </div>
          <span>Анастасия</span>
        </a>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="footer__icon" />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <VkIcon className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

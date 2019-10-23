import React from 'react';
import instagram from '../../instagram.png';

import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <div className="icons">
          <a href="https://instagram.com/calmboundofficial">
            <img src={instagram} className="Social" alt="instagram logo"/>
          </a>
        </div>
        <p>© 2019 Calmbound LLC</p>
    </div>
  );
}

export default Footer;

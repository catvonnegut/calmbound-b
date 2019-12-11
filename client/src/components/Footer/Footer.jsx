import React from 'react';
import instagram from '../../instagram-.png';
import calmboundLogo from '../../assets/calmboundLogo-.png';

import './Footer.css';

function Footer() {
  return (
        <div className='Wrapper-Footer-Info'>
          <img src={calmboundLogo} className="logo" alt="calmbound logo"/>
          <div className="Footer-Info">
            <div className="partners">
            <p> Find Us On: </p>
            <a href="https://www.instagram.com/calmboundofficial/">
              <img src={instagram} className="social" alt="instagram logo"/>
            </a>
          </div>
          <div className="partners">
            <p> Find Us At: </p>
              <a href="http://www.portcityrelief.com/">Port City Relief</a>
              <a href="https://www.facebook.com/pages/Fire-on-Fore/297328430941692">Fire on Fore</a>
              <a href="https://www.facebook.com/elevatemaineglass/">Elevate Maine</a>
              <a href="https://www.sgdrx.com/index.php?controller=about">Soylent Greens</a>
              <a href="https://ggh207.com/">Green Gnome Holistics</a>
            </div>
          </div>
            <p>© 2019 Calmbound LLC</p>
          </div>
  );
}

export default Footer;

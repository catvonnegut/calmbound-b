import React, { Component } from 'react';
import calmboundLogo from '../../assets/calmboundLogo.png';
import { Link } from 'react-router-dom';
import './Header.css'
import DrawerToggleButton from '../SideMenu/DrawerToggleButton'
import headerPhoto from '../../assets/headerPhoto@3x.png';


class Header extends Component {
      render() {
        return (
      <div>
        <div className="Navbar">
        <ul>
        <div>
          <DrawerToggleButton className="burger" click={this.props.drawerClickHandler}/>
        </div>
          <Link to='/'>
          <div>
            <img id="logo" src={calmboundLogo} alt='logo'/>
          </div>
          </Link>
          <Link to='/products'>
            <li>products</li>
          </Link>
          <Link to='/about-us'>
            <li>about us</li>
          </Link>
          <Link to='/contact-us'>
            <li>contact us</li>
          </Link>
        </ul>

      </div>
      <div className="App-header">
        <img id="headerPhoto" src={headerPhoto} alt='sesame buttercups'/>
      </div>
    </div>
    )
  }
}


export default Header;

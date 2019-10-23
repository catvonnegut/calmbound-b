import React, { Component } from 'react';
import calmboundLogo from '../../assets/calmboundLogo.png';
import { Link } from 'react-router-dom';
import './Header.css'
import DrawerToggleButton from '../SideMenu/DrawerToggleButton'



class Header extends Component {
      render() {
        return (

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
          <Link to='/chocolates'>
            <li>chocolates</li>
          </Link>
          <Link to='/cake-mixes'>
            <li>cake mixes</li>
          </Link>
          <Link to='/contact-us'>
            <li>contact us</li>
          </Link>
        </ul>
      </div>
    )
  }
}


export default Header;

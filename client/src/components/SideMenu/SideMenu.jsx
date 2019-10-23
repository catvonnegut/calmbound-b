import React from 'react';
import { Link } from 'react-router-dom';
import birds from '../../assets/birds.png'
import calmboundLogo from '../../assets/calmboundLogo.png'


import './SideMenu.css';


const sideMenu = props => (
  <nav className="side-menu">

    <ul>
    <Link
      to='/'
      onClick={props.drawerClickHandler}>
      <img src={calmboundLogo} alt=''/>
    </Link>
      <Link
        to='/chocolates'
        onClick={props.drawerClickHandler}>
        <li><>&nbsp;</><>&nbsp;<>&nbsp;</>
        <>&nbsp;</><>&nbsp;</></>chocolates</li>
      </Link>
      <Link
        to='/cake mixes'
        onClick={props.drawerClickHandler}>
        <li>
        <>&nbsp;</>
        <>&nbsp;</>
        cake mixes
        <>&nbsp;</>
        <>&nbsp;</>
        </li>
      </Link>
      <Link
        to='/contact-us'
        onClick={props.drawerClickHandler}>
        <li><>&nbsp;</>
        <>&nbsp;</>contact us</li>
      </Link>
    </ul>
  </nav>
);

export default sideMenu;

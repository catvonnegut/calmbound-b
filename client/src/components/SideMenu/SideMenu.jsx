import React from 'react';
import { Link } from 'react-router-dom';
import birds from '../../assets/birds.png'
import calmboundLogo from '../../assets/calmboundLogo-.png'


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
        to='/products'
        onClick={props.drawerClickHandler}>
        <li><>&nbsp;</><>&nbsp;<>&nbsp;</>
        <>&nbsp;</><>&nbsp;</></>products</li>
      </Link>
      <Link
        to='/about us'
        onClick={props.drawerClickHandler}>
        <li>
        <>&nbsp;</>
        <>&nbsp;</>
        about us
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

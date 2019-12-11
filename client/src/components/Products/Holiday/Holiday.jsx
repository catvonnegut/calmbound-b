import React from 'react';
import './Holiday.css';
import maple from '../../../assets/maple.webp';
import orange from '../../../assets/Orange-Ganache.webp';
import sesame from '../../../assets/sesame.webp';
import holiday from '../../../assets/holiday.webp';
import xmastree from '../../../assets/xmas-tree.webp';




function Holiday(props) {
  return (
  <div className="wrapper">
    <div className="product-holiday" id="hline" onClick="HandleClick()">
    <div className="name">
      <img src={holiday} alt='holiday'/>
    </div>
      <h5>{props.line}</h5>
      <div className="holidayflavor">
        <p>
        <img src={xmastree}/>
        {props.flavor1}
        </p>
        <p>
        <img src={xmastree}/>
        {props.flavor2}
        </p>
      </div>
    </div>

   </div>
    );
}

export default Holiday;

import React from 'react';
import './Holiday.css';
import maple from '../../../assets/maple.png';
import orange from '../../../assets/Orange-Ganache.png';
import sesame from '../../../assets/sesame.png';
import holiday from '../../../assets/holiday.png';
import xmastree from '../../../assets/xmas-tree.png';




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

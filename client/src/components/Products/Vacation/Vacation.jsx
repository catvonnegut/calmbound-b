import React from 'react';
import './Vacation.css';
import maple from '../../../assets/maple.png';
import orange from '../../../assets/Orange-Ganache.png';
import sesame from '../../../assets/sesame.png';
import vacation from '../../../assets/vacation_blue_fill.png';



function Vacation(props) {
  return (
  <div className="wrapper">
    <div className="product-choc" id="vline" onClick="HandleClick()">
    <div className="name">
      <img src={vacation} alt='vacation'/>
    </div>
      <h5>{props.line}</h5>
      <div className="chocoflavor">
        <img src={maple} alt='smoked maple sea salt chocolates'/>
        <img src={orange} alt='orange chocolate ganache'/>
        <img src={sesame} alt='sesame buttercups'/>

      </div>
    </div>

   </div>
    );
}

export default Vacation;

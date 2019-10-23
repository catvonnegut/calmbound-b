import React from 'react';
import './Vacation.css';
import maple from '../../../assets/maple.jpg';
import orange from '../../../assets/orange.jpg';
import sesame from '../../../assets/sesame.jpg';
import vacation from '../../../assets/vacation.png';



function Vacation(props) {
  return (
  <div className="wrapper">
    <div className="product-choc" id="vline" onClick="HandleClick()">
    <div className="name">
      <img src={vacation} alt='vacation'/>
    </div>
      <h6>{props.line}</h6>
      <div className="chocoflavor">
        <img src={maple} alt='image of smoked maple sea salt chocolates'/>
        <p>{props.flavor1}</p>
        <img src={orange} alt='image of orange chocolate ganache'/>
        <p>{props.flavor2}</p>
        <img src={sesame} alt='image of sesame buttercups'/>
        <p>{props.flavor3}</p>

      </div>
    </div>

   </div>
    );
}

export default Vacation;

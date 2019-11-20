import React from 'react';
import './Vacation.css';
import maple from '../../../assets/maple.PNG';
import orange from '../../../assets/Orange-Ganache.png';
import sesame from '../../../assets/sesame.PNG';
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
        <img src={maple} alt='image of smoked maple sea salt chocolates'/>
        <img src={orange} alt='image of orange chocolate ganache'/>
        <img src={sesame} alt='image of sesame buttercups'/>

      </div>
    </div>

   </div>
    );
}

export default Vacation;

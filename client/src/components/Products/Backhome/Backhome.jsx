import React from 'react';
import './Backhome.css';
import chocolateCake from '../../../assets/chocolateCake.PNG';
import coffeeCake from '../../../assets/coffeeCake.PNG';
import backhome from '../../../assets/backhome.png';



function Backhome(props) {
  return (
  <div className="wrapper">
    <div className="product-cake" id="bline">
      <div className="name">
        <img src={backhome} alt='backhome product image'/>
      </div>
      <h6>{props.line}</h6>
      <div className="cakeflavor">
        <img src={coffeeCake} alt='cinnamon coffee cake mix' onClick={props.click}/>
        <p>{props.flavor1}</p>

        <img src={chocolateCake} alt='chocolate cake mix' onClick={props.click}/>
        <p>{props.flavor2}</p>
      </div>
    </div>

   </div>
    );
}

export default Backhome;

import React from 'react';
import './Backhome.css';
import chocolateCake from '../../../assets/Chocolate-Cake.png';
import coffeeCake from '../../../assets/Cinnamon-Coffee-Cake.png';
import backhome from '../../../assets/backhome.png';



function Backhome(props) {
  return (
  <div className="wrapper">
    <div className="product-cake" id="bline">
      <div className="name">
        <img src={backhome} alt='backhome product image'/>
      </div>
      <h5>{props.line}</h5>
      <div className="cakeflavor">
        <img src={coffeeCake} alt='cinnamon coffee cake mix' onClick={props.click}/>

        <img src={chocolateCake} alt='chocolate cake mix' onClick={props.click}/>
      </div>
    </div>

   </div>
    );
}

export default Backhome;

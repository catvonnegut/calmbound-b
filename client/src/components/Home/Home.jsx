

import React, { Component } from 'react';
import sesame from '../../assets/sesame.jpg';
import './Home.css'

class Home extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img id="buttercups" src={sesame} alt='sesame buttercups'/>
            <div className="paraclass">
              <p>
              calmbound is a maker of transformative plant-based goods based in the beautiful state of Maine. All of our products are top 8 allergen-free because we believe that ingredients known to cause inflammation should not be paired with the plant.
              </p>
              <p>
              The subtle echo of "compound" is a nod to the natural CBD compound. Its beginning, core, and ending spell out "CBD" - but it's bigger than the sum of those parts.
               calmbound is about movement, progress; always heading for a fresh, brighter, healthier, and overall better state of mind and wellbeing.
              </p>
            </div>
        </div>
      </div>

    );
  }
}

export default Home;

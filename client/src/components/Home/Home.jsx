

import React, { Component } from 'react';
// import sesame from '../../assets/sesame.jpg';
import './Home.css'
import headerPhoto from '../../assets/headerPhoto@3x.png';
import birds from '../../assets/birds.png';

class Home extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img id="headerPhoto" src={headerPhoto} alt='sesame buttercups'/>
            <div className="paraclass">
              <p>
              calmbound is a maker of transformative plant-based goods based in the beautiful state of Maine. All of our products are top 8 allergen-free because we believe that ingredients known to cause inflammation should not be paired with the plant.
              </p>
              <p>
              The subtle echo of "compound" is a nod to the natural CBD compound. Its beginning, core, and ending spell out "CBD" - but it's bigger than the sum of those parts.
               calmbound is about movement, progress; always heading for a fresh, brighter, healthier, and overall better state of mind and wellbeing.
              </p>
              <p>
                <img id="birds" src={birds} alt="birds"/>
              </p>
            </div>
        </div>
      </div>

    );
  }
}

export default Home;

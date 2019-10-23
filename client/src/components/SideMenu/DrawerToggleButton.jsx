import React from 'react';

import './DrawerToggleButton.css'

const drawerToggleButton = props => (
  <button className="toggle-button" aria-label="Open the menu" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
)

export default drawerToggleButton;

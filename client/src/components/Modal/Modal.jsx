import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div className="modal_style">
      <header className="modal_header">
      <div className="image_placeholder"></div>
      {props.title}
      <> </>
      {props.price}
      </header>
      <section className="modal_content">
        <label>
          <input type="text" name="count" placeholder="1"></input>
          <button type="click" name="delete" placeholder="-">-</button>
          <button type="click" name="delete" placeholder="+">+</button>
        </label>
        {props.description}

      </section>
      <section className="modal_actions">
        <button className="btn">Add to cart</button>
        <button className="btn">Buy wholesale</button>
      </section>
    </div>
  )
}

export default Modal;

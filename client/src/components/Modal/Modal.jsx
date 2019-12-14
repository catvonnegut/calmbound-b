import React from 'react';
import './Modal.css';
import add from '../../assets/addToCartButton.png';
import buy from '../../assets/buyWholesaleButton.png';
import add1 from '../../assets/add1.png';
import remove1 from '../../assets/remove1.png';

function Modal(props) {
  return (
    <div className="modal_style"
    onClick={props.modalClickHandler}>
      <header className="modal_header">
      <div className="image_placeholder">{props.name}</div>

      <> </>
      {props.price}
      </header>
      <section className="modal_content">
        <label>
          <input className="counter" type="text" name="count" placeholder="1"></input>
          <button className="remove" type="click" name="remove">
            <img src={remove1} alt="Remove 1"/>
          </button>
          <button className="add" type="click" name="add">
            <img src={add1} alt="Add 1"/>
          </button>

        </label>
        {props.description}

      </section>
      <section className="modal_actions">
        <button className="addToCart">
          <img src={add} alt="Add to Cart" />
        </button>
        <button className="buyWholesale">
          <img src={buy} alt="Buy Wholesale" />
        </button>
      </section>
    </div>
  )
}

export default Modal;

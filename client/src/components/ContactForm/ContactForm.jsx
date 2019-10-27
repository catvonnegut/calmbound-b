import React, { Component } from 'react';
import './ContactForm.css';
import axios from 'axios';

import {addContact} from '../../services/contactsApi'


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      buttonText: 'Submit'
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  }



  handleClick = () => {
    let buttonText = this.state.buttonText == 'Submit' ? 'Thank you!' : 'Submit'
    this.setState({buttonText: buttonText});
    this.setState({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    });
  }


  async handleSubmitForm(e) {
      e.preventDefault()
      const {name, email, message} = this.state

      const form = await axios.post('api/form', {
        name,
        email,
        message
      })

  }

  render() {
    return (
    <div>
    <div className="Main-Contact">
      <div className='Wrapper-Contact'>
        <div className='Wrapper-Contact-Form'>
          <h1>contact us</h1>
          <form className="Contact-Form" onSubmit={this.handleSubmitForm}>
            <div>
              <label>name:</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleTextInput}
                value={this.state.name}
              />
            </div>

            <div>
              <label>email:</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={this.handleTextInput}
                value={this.state.email}
              />
            </div>

            <div className='Message-field-contact'>
              <label>message:</label>
              <textarea
              type="text"
              rows="1"
              cols="26"
              name="message"
              placeholder="message"
              onChange={this.handleTextInput}
              value={this.state.message}
              />
            </div>

            <button onClick={this.handleClick}>{this.state.buttonText}</button>
          </form>

        </div>
      </div>
      </div>
      </div>
      )
    }

}

export default ContactForm;

import React from 'react';
import './Step1.css';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: ' ',
      number: ' ',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    
  };
  handleEmailChange = (e) => {
  this.setState({ email: e.target.value });
  }
  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  }

  render() {
    return (
      <div id='personalForm'>
        <b><h1 className='per'>Personal Info</h1></b>
        <p className='p'>Please provide your name, email address, and phone number.</p>
        <form id='form1'>
          <label>
            Name
            <input
              type='text'
              className='form'
              placeholder='e.g. Stephen King'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Email Address
            <input
              type='email'
              className='form'
              placeholder='e.g. stephenking@lorem.com'
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type='text'
              className='form'
              placeholder='e.g. +1 234 567 890'
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Step1;

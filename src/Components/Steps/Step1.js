import React from 'react';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Personal Info</h1>
        <h3>Please provide your name, email address, and phone number.</h3>
        <form id='form1'>
          <label>
            Name
            <input type='text' placeholder='e.g. Stephen King' />
          </label>
          <label>
            Email Address
            <input type='email' placeholder='e.g. stephenking@lorem.com' />
          </label>
          <label>
            Phone Number
            <input type='text' placeholder='e.g. +1 234 567 890' />
          </label>
        </form>
      </div>
    );
  }
}

export default Step1;

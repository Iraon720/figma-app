import React, { Component } from 'react';
class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>Personal Info</h1>
        <h2> </h2>
      <form>
        
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Email Address:
          <input type='email' />
        </label>
        <label>
          Phone Number:
          <input type='number' />
        </label>
      </form>
    );
  }
}

export default Step1;

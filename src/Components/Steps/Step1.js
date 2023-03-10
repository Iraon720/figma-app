
import React from 'react';
import './Step1.css';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    
   
  }

 

  render() {
    return (
      <div id='personalForm'>
        <b>
          <h1 className='per'>Personal Info</h1>
        </b>
        <p className='p'>
          Please provide your name, email address, and phone number.
        </p>
        <form >
          <div className='Name'>
            <label>Name</label>
            <input
            required
              type='text'
              className='form'
              placeholder='e.g. Stephen King'
              value={this.props.name}
              onChange={this.props.handleName}
            ></input>
          </div>

          <div className='Name'>
            <label>Email</label>
            <input
            required
              type='text'
              className='form'
              placeholder='e.g. Stephen King'
              value={this.props.email}
              onChange={this.props.handleEmail}
            ></input>
          </div>

          <div className='Name'>
            <label>Number</label>
            <input
            required
              type='text'
              className='form'
              placeholder='e.g. Stephen King'
              value={this.props.number}
              onChange={this.props.handleNumber}
            ></input>
          </div>

       
        </form>
      </div>
    );
  }
}

export default Step1;

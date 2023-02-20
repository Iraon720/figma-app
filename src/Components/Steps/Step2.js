import React from 'react';
import './Step2.css'
class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      
    };
  }

  render() {
    return (
      <div id='step2Container'>
        
        <h1 className='header'>Select your plan</h1>
        <h2 className='subheader'>
          You have the option of monthly or yearly billing.
        </h2>
        <div className='monthlyOpts'>
          <div id='arcade'>Arcade $9/mo</div>
          <div id='advanced'>Advanced $12/mo</div>
          <div id='pro'>Pro $15/mo</div>
        </div>
        <div id='toggle'>
          Monthly
          <input type='checkbox' name='toggle'></input>
         Yearly
          </div>
        {/* <div className='yearlyOpts'>
          <div id='arcade'>Arcade $90/yr 2 months free</div>
          <div id='advanced'>Advanced $120/yr 2 months free</div>
          <div id='pro'>Pro $150/yr 2 months free</div>
        </div> */}
      </div>
    );
  }
}

export default Step2;

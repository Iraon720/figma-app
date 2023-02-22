import React from 'react';
import './Step2.css';
import Switch from 'react-switch';
const activeStyles = { color: '#022959', backgroundColor: 'red' };
const defaultStyles = { color: 'black', backgroundColor: 'transparent' };
const planSelection = [
  {
    plan: 'Arcade',
    monthly: 9,
    yearly: 90,
    src: 'add path to image here',
  },
  {
    plan: 'Advanced',
    monthly: 12,
    yearly: 120,
    src: 'add path to image here',
  },
  {
    plan: 'Pro',
    monthly: 15,
    yearly: 150,
    src: 'add path to image here',
  },
];

class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='step2Container'>
        <h1 className='header'>Select your plan</h1>
        <p className='subheader'>
          You have the option of monthly or yearly billing.
        </p>

        {planSelection.map((plan, i) => {
          return (
            <div
            key = {i}
              id='arcade'
              onClick={() => this.props.changePlan(plan)}
              style={
                this.props.selectedPlan === plan
                  ? activeStyles
                  : defaultStyles
              }
            >
              <p>{plan.plan}</p>
              <p>
                {this.props.billingType === 'Monthly'
                  ? plan.monthly
                  : plan.yearly}
              </p>
            </div>
          );
        })}

        {/* <div id='toggle'>
          Monthly
          <input
            type='switch'
            name='toggle'
            onChange={this.props.handleToggle}
          ></input>
          Yearly
        </div> */}

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>Monthly</div>
          <Switch
            onChange={() => this.props.changeBillingType()}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#02295a'
            offColor='#02295a'
            checked={this.props.billingType === 'Yearly'}
          />
          <div>Yearly</div>
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

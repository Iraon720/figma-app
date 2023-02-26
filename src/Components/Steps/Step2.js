import React from 'react';
import './Step2.css';
import Switch from 'react-switch';

const activeStyles = {
  color: '#022959',
  backgroundColor: 'hsl(217, 100%, 97%)',
};
const defaultStyles = { color: '', backgroundColor: 'white' };
const planSelection = [
  {
    id: 1,
    plan: 'Arcade',
    monthly: 9,
    yearly: 90,
    src: './images/icon-arcade.svg',
  },
  {
    id: 2,
    plan: 'Advanced',
    monthly: 12,
    yearly: 120,
    src: './images/icon-advanced.svg',
  },
  {
    id: 3,
    plan: 'Pro',
    monthly: 15,
    yearly: 150,
    src: './images/icon-pro.svg',
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
      
<div className='plan-container'>
        {planSelection.map((plan, i) => {
          return (
            <div
              className='.Opts'
              key={i}
              id='arcade'
              onClick={() => {
                this.props.handleTotal();
                this.props.changePlan(plan);
                 
              }}
              style={
                this.props.selectedPlan === plan ? activeStyles : defaultStyles
              }
            >
              <p>{plan.plan}</p>
              <div className='type-of-billing'>
                <p>
                  {this.props.billingType === 'Monthly'
                    ? plan.monthly
                    : plan.yearly + '2 months free'}
                </p>
              </div>
            </div>
          );
        })}

      

        <div className='toggle-btn' style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly' }}>
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
</div>
      </div>
    );
  }
}

export default Step2;

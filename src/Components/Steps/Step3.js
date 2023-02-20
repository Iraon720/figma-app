import React from 'react';
import './Step3.css';
const array = [
  { Step: 'Step 1', Text: 'Your Info' },
  { Step: 'Step 2', Text: 'Select Plan' },
  { Step: 'Step 3', Text: 'Add-Ons' },
  { Step: 'Step 4', Text: 'Summary' },
];
class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addons: [
        {
          id: 1,
          title: 'Online service',
          description: '+1',
          status: 'MONTHLY',
        },
      ],
    };
  
   
  }

  render() {
    return (
      <div>
        <h1 className='header'>Pick add-ons</h1>
        <h2 className='subheader'>
          Add-ons help enhance your gaming experience.
        </h2>
        <div className='monthlyOpts'>
          <div className='opts'>
            <input type='checkbox' className='check' />
            <div className='words'>
            <h2>Online Service</h2>
            <h3>Access to multiplayer games</h3>
            <h2>+$1/mo</h2>
            </div>
          </div>
          <div className='opts'>
            <input type='checkbox' className='check' />
            <div className='words'>
            <h2>Larger storage</h2>
            <h3>Extra 1 TB of cloud save</h3>
            <h2>+$2/mo</h2>
            </div>
          </div>
          <div className='opts'>
            <input type='checkbox' className='check' />
            <div className='words'>
            <h2>Customizable profile</h2>
            <h3>Custom theme on your profile</h3>
            <h2>+$2/mo</h2>
            </div>
            
          </div>
        </div>
        {/* <div className='yearlyOpts'>
          <div className='online'>
            <input type='checkbox' className='check' />
            <h2>Online Service</h2>
            <h3>Access to multiplayer games</h3>
            <h2>+$10/yr</h2>
          </div>
          <div className='storage'>
            <input type='checkbox' className='check' />
            <h2>Larger storage</h2>
            <h3>Extra 1 TB of cloud save</h3>
            <h2>+$20/yr</h2>
          </div>
          <div className='profile'>
            <input type='checkbox' className='check' />
            <h2>Customizable profile</h2>
            <h3>Custom theme on your profile</h3>
            <h2>+$20/yr</h2>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Step3;

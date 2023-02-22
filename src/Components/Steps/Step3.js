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
      <div className='stepThreeAddOns'>
        <h1 className='stepThreeHeader'>Pick add-ons</h1>
        <h2 className='stepThreeSubheader'>
          Add-ons help enhance your gaming experience
        </h2>

        <div className='options'>
          <div className='onlineService'>
            <input className='check' type='checkbox'></input>
            <div>
              <p>Online Service</p>
              <p>Access to multiplayer games</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }


export default Step3;

import React from 'react';
import './Step3.css';
const wantMore = [
  {
    id: 1,
    addOn: 'Online',
    monthly: 1,
    yearly: 10,
  },
  {
    id: 2,
    addOn: 'Storage',
    monthly: 2,
    yearly: 20,
  },
  {
    id: 3,
    addOn: 'Profile',
    monthly: 2,
    yearly: 20,
  },
];
class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='add-on-container'>
        <h1>
          <b>Pick add-ons</b>
        </h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <section className='add-on'>
          {wantMore.map((addOn, i) => (
            <div key={i} className={addOn.addOn}>
              <input
                type='checkbox'
                id={i}
                className='checkbox'
                onClick={
                  () =>{
                    this.props.handleAddOnTotal();
                     this.props.addOnSelection(addOn);
                }}
              />
              <div className='description'>
                <h4>{addOn.addOn} service</h4>
                <p>
                  {addOn.addOn === 'Online'
                    ? 'Access to multiplayer games'
                    : addOn.addOn === 'Storage'
                    ? 'Extra 1TB of cloud save'
                    : addOn.addOn === 'Profile'
                    ? 'Custom theme on your profile'
                    : ''}
                </p>
              </div>
              <span className='price'> 
              ${this.props.billingType === 'Monthly' ? addOn.monthly + '/mo': addOn.yearly + '/yr'}
               </span>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Step3;

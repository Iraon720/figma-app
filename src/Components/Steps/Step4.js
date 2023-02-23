import React from 'react';
import './Step4.css';
const totalPrice = [
  {
    title: 'Arcade(Monthly)',
    price: '$9/mo',
    
  },
  {
    title: 'Online service',
    price: '+$1/mo',
  },
  {
    title: 'Larger storage',
    price: '+$2/mo',
  },
  {
    title: 'Total (per month)',
    price: '+$12/mo',
  },
];

class Step4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='step4-container'>
        <div className='finished'>
          <h1>
            <b>Finishing up</b>
          </h1>
          <p>Double-check everything looks OK before confirming.</p>
         
            <div className='total'>
              <div>
                <div className='plan-choice'>
                  <div>
                    <h4>Arcade(Monthly)</h4>

                    <p>Change</p>
                  </div>
                  <span>
                    <b>$9/mo</b>
                  </span>
                </div>
              </div>
              <div className='type-of-service'>
                <p>Online service</p>
                <span>+$1/mo</span>
              </div>
              <div className='list-of-add'>
                <p>Larger storage</p>
                <span>+$2/mo</span>
              </div>
            </div>
            <div className='total-per'>
              <p>Total (per month)</p>
              <span>+$12/mo</span>
            </div>
          
        </div>
        
      </div>
    );
  }
}

export default Step4;
{
  /* <div className='step4yearly'>
          <div>
            <div>
              <h2>Arcade(Yearly)</h2>
              <h3>Change</h3>
              <h2>$90/yr</h2>
            </div>
            <h3>Online service</h3>
            <h3>Larger storage</h3>
          </div>
          <h3>
            Total (per year)
            <h2>+$120/yr</h2>
          </h3>
        </div> */
}
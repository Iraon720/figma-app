import React from 'react';
class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>
          <b>Finishing up</b>
        </h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className='step4monthly'>
          <div>
            <div>
              <h2>Arcade(Monthly)</h2>
              <h3>Change</h3>
              <h2>$9/mo</h2>
            </div>
            <h3>Online service</h3>
            <h3>Larger storage</h3>
          </div>
          <h3>
            Total (per month)
            <h2>+$12/mo</h2>
          </h3>
        </div>
        {/* <div className='step4yearly'>
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
        </div> */}
      </div>
    );
  }
}

export default Step4;

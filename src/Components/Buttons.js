import React from 'react';
import './Button.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className='step1-3'>
          <button onClick={''}>Next Step</button>
        </div>
        {/* <div className='step2-4'>
          <button onClick={''}>Go Back</button>
        </div>
        <div className='step4'>
          <button onClick={''}>Confirm</button>
        </div> */}
      </>
    );
  }
}

export default Buttons;

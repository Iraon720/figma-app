import React from 'react';
// import './Button.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{display:'flex',flexDirection:'row-reverse' }}>
        <div className='step1-3'>
          <button onClick={this.props.handleNext}>Next Step</button>
        </div>
        <div className='step2-4'>
          <button onClick={this.props.handleGoBack}>Go Back</button>
        </div>
      
      </div>
    );
  }
}

export default Buttons;

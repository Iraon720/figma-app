import React from 'react';
import './Button.css';

class Buttons extends React.Component {
 
    
 

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          marginRight: '2rem',
          
        }}
      >
        <div className='next'style={{ color: '#022959' }}>
          <button onClick={this.props.handleNext}>Next Step</button>
        </div>
        <div style={{ color: 'white', marginRight: '6rem' }}>
          <button onClick={this.props.handleGoBack}>Go Back</button>
        </div>
      </div>
    );
  }
  }


export default Buttons;

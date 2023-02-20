import React from 'react';
import SideNav from './Components/SideNav/SideNav';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';
import Buttons from './Components/Buttons';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
    this.handleStepDecrease = this.handleStepDecrease.bind(this);
    this.handleStepIncrease = this.handleStepIncrease.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
  }
  handleStepIncrease = () => {
    this.setState({currentStep:this.state.currentStep +1 });
  };
  handleStepDecrease = () => {
    this.setState({currentStep: this.state.currentStep -1 });
  };
  //Handles clicking numbers on sideNav
  handleChangeStep = (num) => {
    this.setState({currentStep: num });
  }

  // test() {
  //   fetch('/verifyEmail', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }

  render() {
    return (
      <div id='body'>
        <div id='cardHolder'>
          <SideNav currentStep={this.state.currentStep} changeStep={this.handleChangeStep} />
          {this.state.currentStep === 1 && (
          <Step1/>
         )}
         {/* <Step2/> */}
          
          <Buttons 
          handleNext={this.handleStepIncrease}
          handleGoBack={this.handleStepDecrease}/>
        </div>
      </div>
    );
  }
}



export default App;


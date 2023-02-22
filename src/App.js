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
      name: ' ',
      email: ' ',
      number: ' ',
      selectedPlan: {},
      billingType: 'Monthly',
    };
    this.handleStepDecrease = this.handleStepDecrease.bind(this);
    this.handleStepIncrease = this.handleStepIncrease.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handlePlanSelection = this.handlePlanSelection.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);

    this.handleToggle = this.handleToggle.bind(this);
  }
  //Navigation carousel with buttons
  handleStepIncrease = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };
  handleStepDecrease = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };
  //Handles clicking numbers on sideNav
  handleChangeStep = (num) => {
    this.setState({ currentStep: num });
  };

  //step 1
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };
  //Step 2 trying to target each div
  handlePlanSelection = (plan) => {
    this.setState({ selectedPlan: plan });
  };
  //Toggle between display based on if the toggle button is checked. If it is then monthly options should appear otherwise yearly.
  handleToggle = () => {
    if (this.state.billingType === 'Monthly') {
      this.setState({ billingType: 'Yearly' });
    } else {
      this.setState({ billingType: 'Monthly' });
    }
  };

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
          <SideNav
            currentStep={this.state.currentStep}
            changeStep={this.handleChangeStep}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {this.state.currentStep === 1 && (
              <Step1
                name={this.state.name}
                email={this.state.email}
                number={this.state.number}
                handleName={this.handleNameChange}
                handleEmail={this.handleEmailChange}
                handleNumber={this.handleNumberChange}
              />
            )}

            {this.state.currentStep === 2 && (
              <Step2
                selectedPlan={this.state.selectedPlan}
                changePlan={this.handlePlanSelection}
                billingType={this.state.billingType}
                changeBillingType={this.handleToggle}
              />
            )}
            {this.state.currentStep === 3 && <Step3 />}
            {this.state.currentStep === 4 && <Step4 />}

            <Buttons
              handleNext={this.handleStepIncrease}
              handleGoBack={this.handleStepDecrease}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

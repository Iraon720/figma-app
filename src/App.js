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
      selectedPlan:{
        plan: 'Arcade',
        monthly: 9,
        yearly: 90

      },
      billingType: 'Monthly',
      id: 1,
      addOns:[{
        selected:false,
        addOn: 'Online',
        monthly: 1,
        yearly: 10
      },
      {
        selected:false,
        addOn:'Storage',
        monthly: 2,
        yearly:20,
},
      {
        selected:false,
        addOn:'Profile',
        monthly: 2,
        yearly:20,
      }
    ],
      total:0,
      addOnPrice: 0
     };

  

    this.handleStepDecrease = this.handleStepDecrease.bind(this);
    this.handleStepIncrease = this.handleStepIncrease.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.handlePlanSelection = this.handlePlanSelection.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCheckBoxes = this.handleCheckBoxes.bind(this);
    this.planAddOns=this.planAddOns.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    
  
    this.handleTotal = () => {
      const { selectedPlan, billingType } = this.state;
      const { monthly, yearly } = selectedPlan;

      const totalPrice =
        billingType === 'Monthly'
          ? monthly
          : billingType === 'Yearly'
          ? yearly
          : null; // Calculate monthly or yearly price based on billingType

      if (totalPrice !== null) {
        this.setState({ total: totalPrice }); // if total price is not null, then execute code to update state
      }
    };
    this.handleAddOnTotal = () => {
      const {addOns,billingType} = this.state;
      const {monthly,yearly} = addOns;

      const addOnTotal = billingType === 'Monthly' ? monthly : billingType === 'Yearly' ? yearly : null;
      if(addOnTotal !== null) {
        this.setState({ addOnPrice: addOnTotal}); 
      }
};


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
  //Step 3 Add-ons
  planAddOns = (addOn) => {
    this.setState({ addOns: addOn });
};

// Step 3 for checkboxes
handleCheckBoxes = (e) => {
  this.setState({addOns:e.target.checked.id});
};
// Step 4 carrying collected data





  // test() {
  //   fetch('/verifyEmail', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }

  render() {
    return (
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
              handleTotal={this.handleTotal}
              billingType={this.state.billingType}
              changeBillingType={this.handleToggle}
            />
          )}
          {this.state.currentStep === 3 && (
            <Step3
              handleAddOnTotal={this.handleAddOnTotal}
              addOns={this.state.addOns}
              addOnSelection={this.planAddOns}
              billingType={this.state.billingType}
              addToTotal={this.handleToggle}
              selectedAddOns={this.state.selectedAddOns}
              handleCheckBoxes={this.handleCheckBoxes}
            />
          )}
          {this.state.currentStep === 4 && (
            <Step4 selectedPlan={this.state.selectedPlan} />
          )}
          ;
          <Buttons
            handleNext={this.handleStepIncrease}
            handleGoBack={this.handleStepDecrease}
          />
        </div>
      </div>
    );
          }     
  }


export default App;

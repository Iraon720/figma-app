import React from 'react';
import SideNav from './Components/SideNav/SideNav';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';
import Buttons from './Components/Buttons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <SideNav />
          {/* <Step1 /> */}
          {/* <Step2/> */}
          <Step3/>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
{
  /* <Step2 />
          <Step3 />
          <Step4 /> */
}

import React from 'react';
import SideNav from './Components/SideNav/SideNav';
import Step1 from './Components/Steps/Step1';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  test() {
    fetch('/verifyEmail', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  render() {
    return (
      <body id='body'>
        <SideNav />
        <button onClick={this.test}>test</button>
        <Step1 />
      </body>
    );
  }
}

export default App;

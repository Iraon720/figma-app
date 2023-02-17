import React, { Component } from 'react';
import './SideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className='Steps' id='Steps'>
        <div class='StepBtns' data-toggle='buttons'>
          <label class='Steps'>
            <input
              type='radio'
              name='Step1'
              id='option1'
              autocomplete='off'
              checked
            />{' '}
            1{' '}
          </label>

          <label class='btn btn-secondary'>
            <input type='radio' name='Step2' id='option2' autocomplete='off' />{' '}
            2{' '}
          </label>

          <label class='btn btn-secondary'>
            <input type='radio' name='Step3' id='option3' autocomplete='off' />{' '}
            3{' '}
          </label>

          <label class='btn btn-secondary'>
            <input type='radio' name='Step4' id='option3' autocomplete='off' />{' '}
            4
          </label>
          {array.map((item) => (
            <div>
              <h2>{item.Step}</h2>
              <p>{item.Text}</p>
            </div>
          ))}
        </div>
      </nav>
    );
  }
}
const array = [
  { Step: 'Step 1', Text: 'Your Info' },
  { Step: 'Step 2', Text: 'Select Plan' },
  { Step: 'Step 3', Text: 'Add-Ons' },
  { Step: 'Step 4', Text: 'Summary' },
];

export default SideNav;

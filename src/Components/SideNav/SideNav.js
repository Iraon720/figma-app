import React from 'react';
import './SideNav.css';

const array = [
  { Step: 'Step 1', Text: 'Your Info' },
  { Step: 'Step 2', Text: 'Select Plan' },
  { Step: 'Step 3', Text: 'Add-Ons' },
  { Step: 'Step 4', Text: 'Summary' },
];

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return array.map((item) => (
      <div>
        <h2>{item.Step}</h2>
        <p>{item.Text}</p>
      </div>
    ));
  }
}

export default SideNav;

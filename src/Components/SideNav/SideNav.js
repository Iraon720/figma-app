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
    return (
      <div id='sideNavContainer'>
        <div>
          <div id='numbers'> 1</div>
          <div id='numbers'> 2</div>
          <div id='numbers'> 3</div>
          <div id='numbers'> 4</div>
        </div>
        <div>
          <div id='numbers'>Sample 1</div>
          <div id='numbers'>Sample 2</div>
          <div id='numbers'>Sample 3</div>
        </div>
      </div>
    );
  }
}

export default SideNav;

// array.map((item) => ()
{
  /* <div id='sideNav'>
          <h2>{item.Step}</h2>
          <p>{item.Text}</p>
          <div /> */
}

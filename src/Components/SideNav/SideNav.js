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
        <div className='step#s'>
          <div id='step1'> 1</div>
          <div id='step2'> 2</div>
          <div id='step3'> 3</div>
          <div id='step4'> 4</div>
        </div>
        <div id='sideNavSteps'>
          <h3 className='top'>Step 1</h3>
          <h2 className='bottom'>Your Info</h2>

          <h3 className='top'>Step 2</h3>
          <h2 className='bottom'>Select Plan</h2>

          <h3 className='top'>Step 3</h3>
          <h2 className='bottom'>Add-Ons</h2>

          <h3 className='top'>Step 3</h3>
          <h2 className='bottom'>Summary</h2>
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

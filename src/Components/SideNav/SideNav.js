import React from 'react';
import Step1 from '../Steps/Step1';
import './SideNav.css';

// const array = [
//   { Step: 'Step 1', Text: 'Your Info' },
//   { Step: 'Step 2', Text: 'Select Plan' },
//   { Step: 'Step 3', Text: 'Add-Ons' },
//   { Step: 'Step 4', Text: 'Summary' },
// ];
const activeStyles = { color: '#022959', backgroundColor: '#BEE2FD'};
const defaultStyles = { color: 'white', backgroundColor: 'transparent' };


const SideNav = ({currentStep,changeStep}) => {
  return (
    <div id='sideNavContainer'>
      <div className='stepNum'>
        {/* if the current step that we are getting from props = 1 then we want to apply this style object. */}
        <div
          id='step1'
          className='active'
          style={currentStep === 1 ? activeStyles : defaultStyles}
        >
          1
        </div>
        <div
          id='step2'
          className='active'
          style={currentStep === 2 ? activeStyles : defaultStyles}
        >
          2
        </div>
        <div
          id='step3'
          style={currentStep === 3 ? activeStyles : defaultStyles}
          className='active'
        >
          3
        </div>
        <div
          id='step4'
          style={currentStep === 4 ? activeStyles : defaultStyles}
          className='active'
        >
          4
        </div>
      </div>
      <div id='sideNavSteps'>
        <section onClick={() => changeStep(1)}>
          <p className='top'>Step 1</p>
          <p className='bottom'>
            <b>Your Info</b>
          </p>
        </section>
        <section onClick={() => changeStep(2)}>
          <p className='top'>Step 2</p>
          <p className='bottom'>
            <b>Select Plan</b>
          </p>
        </section>
        <section onClick={() => changeStep(3)}>
          <p className='top'>Step 3</p>
          <p className='bottom'>
            <b>Add-Ons</b>
          </p>
        </section>
        <section onClick={() => changeStep(4)}>
          <p className='top'>Step 4</p>
          <p className='bottom'>
            <b>Summary</b>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SideNav;

// array.map((item) => ()
{
  /* <div id='sideNav'>
          <h2>{item.Step}</h2>
          <p>{item.Text}</p>
          <div /> */
}

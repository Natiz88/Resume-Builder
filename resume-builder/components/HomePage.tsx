import React from 'react';
import Steps from './Steps';
import Resume from './Resume';
import Personal from './forms/Personal';
import ResumePage from './resume/ResumePage';

const HomePage = () => {
  return (
    <div className='lg:flex justify-around items-center'>
      <div className='lg:w-1/2'>
      <Steps />
      <Personal />
      </div>
        
      <ResumePage/>
    </div>
  )
}

export default HomePage
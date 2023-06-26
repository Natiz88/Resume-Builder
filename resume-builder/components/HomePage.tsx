import React from 'react';
import Steps from './Steps';
import Resume from './Resume';

const HomePage = () => {
  return (
    <div className='flex justify-around items-center'>
        <Steps/>
        <Resume/>
    </div>
  )
}

export default HomePage
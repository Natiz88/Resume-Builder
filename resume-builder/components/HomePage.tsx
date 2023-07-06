'use client'
import React from 'react';
import Steps from './Steps';
import Resume from './Resume';
import Personal from './forms/Personal';
import Skills from './forms/Skills'
import ResumePage from './resume/ResumePage';
import MyEditor from './MyEditor'

const HomePage = () => {
  return (
    <div className='lg:flex justify-around'>
      <div className='lg:w-2/5'>
      <Steps />
      {/* <Personal /> */}
      
      <Skills />
      </div>
      <div className='lg:w-3/6 lg:mx-4'>      
      <ResumePage/>
</div>
    </div>
  )
}

export default HomePage
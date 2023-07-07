'use client'
import React from 'react';
import Steps from './Steps';
import Resume from './Resume';
import Personal from './forms/Personal';
import Skills from './forms/Skills'
import ResumePage from './resume/ResumePage';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import NextButton from "../components/NextButton";
import Experience from './forms/Experience';
import Project from './forms/Project'

const HomePage = () => {
  const step = useSelector((state:RootState) => state.step.step)
  return (
    <div className='lg:flex justify-around'>
      <div className='lg:w-2/5'>
      <Steps />
      {step === 0 && <Personal />}
      {step === 1 && <Skills />}
      {step === 2 && <Experience />}
      {step === 3 && <Project />}
      <NextButton/>
      </div>
      <div className='lg:w-3/6 lg:mx-4'>      
      <ResumePage/>
    </div>
    </div>
  )
}

export default HomePage
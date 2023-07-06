import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const steps = [
  'Personal Info',
  'Skills',
  'Experience',
  'Projects',
];

export default function Steps() {
  const step = useSelector((state:RootState) => state.step.step)
  return (
    <div className='w-full'>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
  );
}
import React from 'react';
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux';
import { addStep,subtractStep } from '@/redux/reducers/StepReducer';

const NextButton = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-full flex items-center justify-around p-4'>
        <Button variant='outlined' onClick={()=>dispatch(subtractStep({}))}>Prev</Button>
        <Button variant='outlined' onClick={()=>dispatch(addStep({}))}>Next</Button>
    </div>
  )
}

export default NextButton
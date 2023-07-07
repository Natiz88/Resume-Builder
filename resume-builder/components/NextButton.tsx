import React from 'react';
import {Button} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux';
import { addStep,subtractStep } from '@/redux/reducers/StepReducer';
import { RootState } from '@/redux/store';

const NextButton = () => {
  const step = useSelector((state:RootState) => state.step.step)
  const dispatch = useDispatch()
  return (
    <div className='w-full flex items-center justify-around p-4'>
        <Button variant='outlined' disabled={step <= 0} onClick={()=>dispatch(subtractStep({}))}>Prev</Button>
        <Button variant='outlined' disabled={step >= 3} onClick={()=>dispatch(addStep({}))}>Next</Button>
    </div>
  )
}

export default NextButton
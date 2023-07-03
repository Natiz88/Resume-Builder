import React from 'react';
import {Button} from '@mui/material'

const NextButton = () => {
  return (
    <div className='w-full flex items-center justify-around p-4'>
        <Button variant='outlined'>Prev</Button>
        <Button variant='outlined'>Next</Button>
    </div>
  )
}

export default NextButton
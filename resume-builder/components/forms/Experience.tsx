'use client'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import {
    Grid,
    Button,
    TextField,Checkbox
  } from "@mui/material";
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
  import { addExperience,updateExperience,deleteExperience } from '@/redux/reducers/ExperienceReducer';

const Experience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state:RootState) => state.experience.experience)
//   const activeId = useSelector((state:RootState) => state.experience.activeId)
  const [active,setActive] = useState<number | null>(null)

    const addNewExperience = () => {
      let id=uuidv4();
        dispatch(addExperience({value:{
          id,
          title:"",
          employer:"",
          location:"",
          start:"",
          end:"",
          description:"",
          current:false            
      }}))
      setActive(id)
    }

    const deleteSingleExperience = (id:number) => {
      dispatch(deleteExperience({id}))
    }

    const handleChange = (value:any,id:number) => {
      dispatch(updateExperience({id,value}))
    }

    const handleActive = (id:number) => {
        active === id ? setActive(null) : setActive(id)
    }

  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewExperience} className='my-4' variant="outlined">Add Experience</Button>
        <div className='my-4'>
        {
        experiences && experiences.map(exp => 
            <div key = {exp.id} 
            className=" w-full cursor-pointer border-gray-300 rounded-md my-1"
            onClick={()=>handleActive(exp.id)}
            >
                <p className='flex justify-between items-center px-4 py-2'>
                <span className='flex flex-col text-base font-semibold'>{exp.title}
                {exp.start && <span className='text-sm text-gray-500 font-light'>{exp?.start} - {exp?.end}</span>
                }</span>
                <span className='flex space-x-4'>
                {active === exp.id ? <ArrowDropUpIcon />:<ArrowDropDownIcon/>}
                 <DeleteOutlineOutlinedIcon className="" onClick={()=>deleteSingleExperience(exp.id)}/>      
                 </span>
                 </p>

                 {active === exp.id && 
                        <Grid item xs={12} key={exp.id} className='flex flex-col space-y-4 my-2 p-4 text-sm' onClick={(e) => e.stopPropagation()} >
                         <TextField label="Title" value={exp.title} size='small' fullWidth variant="outlined" onChange={(e)=>handleChange({...exp,title:e.target.value},exp.id)} />
                         <TextField label="Company" value={exp.employer} size='small' fullWidth variant="outlined" onChange={(e)=>handleChange({...exp,employer:e.target.value},exp.id)} />
                         <TextField label="Location" value={exp.location} size='small' fullWidth variant="outlined" onChange={(e)=>handleChange({...exp,location:e.target.value},exp.id)} />
                         <TextField label="Description" value={exp.description} size='small' fullWidth multiline rows={3} variant="outlined" onChange={(e)=>handleChange({...exp,description:e.target.value},exp.id)} />
                         <div className='flex space-x-2'>
                         <TextField label="Start Date" value={exp.start} size='small' variant="outlined" fullWidth onChange={(e)=>handleChange({...exp,start:e.target.value},exp.id)} />
                         <TextField label="End Date" value={exp.current ? "Present" : exp.end} size='small' variant="outlined" fullWidth onChange={(e)=>handleChange({...exp,end:e.target.value},exp.id)} />
                         </div>
                        <div className='flex space-x-1 items-center'><Checkbox checked={exp.current} onChange={(e)=>handleChange({...exp,current:e.target.checked},exp.id)} /><p className='text-gray-600'>currently working there</p></div>
                     </Grid>
                 }
                <hr />

            </div>

        )
}
        </div>
    </div>
  )
}

export default Experience
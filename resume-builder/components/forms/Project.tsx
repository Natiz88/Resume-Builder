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
  import { addProject,updateProject,deleteProject } from '@/redux/reducers/ProjectReducer';

const Project = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state:RootState) => state.project.projects)
//   const activeId = useSelector((state:RootState) => state.project.activeId)
  const [active,setActive] = useState<number | null>(null)

    const addNewProject = () => {
      let id=uuidv4();
        dispatch(addProject({value:{
          id,
          project_title:"",
          description:"",
          link:"",         
      }}))
      setActive(id)
    }

    const deleteSingleProject = (id:number) => {
      dispatch(deleteProject({id}))
    }

    const handleChange = (value:any,id:number) => {
      dispatch(updateProject({id,value}))
    }

    const handleActive = (id:number) => {
        active === id ? setActive(null) : setActive(id)
    }

  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewProject} className='my-4' variant="outlined">Add Project</Button>
        <div className='my-4'>
        {
        projects && projects.map((project) => 
            <div key = {project.id} 
            className=" w-full cursor-pointer border-gray-300 rounded-md my-1"
            onClick={()=>handleActive(project.id)}
            >
                <p className='flex justify-between items-center px-4 py-2'>
                <span className='flex flex-col text-base font-semibold'>{project.project_title}
                {project.link && <span className='text-sm text-gray-500 font-light'>{project.link}</span>
                }</span>
                <span className='flex space-x-4'>
                {active === project.id ? <ArrowDropUpIcon />:<ArrowDropDownIcon/>}
                 <DeleteOutlineOutlinedIcon className="" onClick={()=>deleteSingleProject(project.id)}/>      
                 </span>
                 </p>

                 {active === project.id && 
                        <Grid item xs={12} key={project.id} className='flex flex-col space-y-4 my-2 p-4 text-sm' onClick={(e) => e.stopPropagation()} >
                         <TextField label="Title" value={project.project_title} size='small' fullWidth variant="outlined" onChange={(e)=>handleChange({...project,project_title:e.target.value},project.id)} />
                         <TextField label="Description" value={project.description} size='small' fullWidth multiline rows={3} variant="outlined" onChange={(e)=>handleChange({...project,description:e.target.value},project.id)} />
                         <TextField label="Link" value={project.link} size='small' fullWidth variant="outlined" onChange={(e)=>handleChange({...project,link:e.target.value},project.id)} />
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

export default Project;
'use client'
import {FormEvent,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addSkill,updateSkill,deleteSkill } from '@/redux/reducers/SkillReducer';
import {
    Grid,
    Button,
    TextField,
  } from "@mui/material";
  import AddIcon from '@mui/icons-material/Add';
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { idText } from 'typescript';

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state:RootState) => state.skill.skills)
    interface skillType {
        id:String,
        skill:String
    }
    const addNewSkill = () => {
        dispatch(addSkill({}))
    }

    const deleteSingleSkill = (id:String) => {
      dispatch(deleteSkill({id}))
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:String) => {
      let value = e.target.value;
      dispatch(updateSkill({id,value}))
    }

    // const submitSkills = (e:FormEvent) => {
    //   e.preventDefault();
    //   dispatch(updateSkill(skills))
    // }

  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewSkill}>Add Skill</Button>
        <form>
        <Grid container spacing={2}>
        {
        skills && skills.map(s => 
        <Grid item xs={12} key={s.id} className='flex items-center'>
            <TextField label="Skill" value={s.skill} fullWidth variant="outlined" onChange={(e)=>handleChange(e,s.id)} />
            <DeleteOutlineOutlinedIcon className='border border-gray-300' onClick={()=>deleteSingleSkill(s.id)}/>      
        </Grid>
        )
}
</Grid>
<button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Skills
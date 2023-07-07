'use client'
import {FormEvent,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addSkill,updateSkill,deleteSkill } from '@/redux/reducers/SkillReducer';
import {
    Grid,
    Button,
    TextField,
  } from "@mui/material";
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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

    const deleteSingleSkill = (id:number) => {
      dispatch(deleteSkill({id}))
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:number) => {
      let value = e.target.value;
      dispatch(updateSkill({id,value}))
    }

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
        </form>
    </div>
  )
}

export default Skills
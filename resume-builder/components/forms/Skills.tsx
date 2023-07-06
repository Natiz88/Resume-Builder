'use client'
import {FormEvent,useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { infoActions } from '@/redux/reducers/InfoReducer';
import {
    Grid,
    Button,
    TextField,
  } from "@mui/material";
  import AddIcon from '@mui/icons-material/Add';
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Skills = () => {
  const dispatch = useDispatch();
  const skillList = useSelector((state:RootState) => state.info.skills)
    interface skillType {
        id:String,
        skill:String
    }
    const [skills,setSkills] = useState<skillType[]>([]);

    const addNewSkill = () => {
        setSkills([...skills,{id:uuidv4(),skill:""}])
    }

    const deleteSkill = (id:String) => {
        setSkills(skills.filter(skill => id !== skill.id))
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:String) => {
      const newSkill = skills.map(obj => {
        if (obj.id === id) {
          return {...obj, skill: e.target.value};
        }
          return obj;
      });
      setSkills(newSkill)
    }

    const submitSkills = (e:FormEvent) => {
      e.preventDefault();
      dispatch(infoActions.updateSkills(skills))
    }

  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewSkill}>Add Skill</Button>
        <form onSubmit={submitSkills}>
        <Grid container spacing={2}>
        {
        skills && skills.map(s => 
        <Grid item xs={12} key={s.id} className='flex items-center'>
            <TextField label="Skill" value={s.skill} fullWidth variant="outlined" onChange={(e)=>handleChange(e,s.id)} />
            <DeleteOutlineOutlinedIcon className='border border-gray-300' onClick={()=>deleteSkill(s.id)}/>      
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
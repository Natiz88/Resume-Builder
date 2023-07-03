'use client'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import {
    Grid,
    Button,
    TextField,
  } from "@mui/material";
  import AddIcon from '@mui/icons-material/Add';
  import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Skills = () => {
    interface skillType {
        id:String,
        skill:String
    }
    const [skills,setSkills] = useState<skillType[]>([]);

    const addNewSkill = () => {
        setSkills([...skills,{id:uuidv4(),skill:""}])
    }

    const deleteSkill = (id:String) => {
        console.log("id",id)
        setSkills(skills.filter(skill => id !== skill.id))
    }
  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewSkill}>Add Skill</Button>
        <form>
        <Grid container spacing={2}>
        {
        skills && skills.map(s => 
        <Grid item xs={12} key={s.id} className='flex items-center'>
            <TextField label="Skill" value={s.skill} fullWidth variant="outlined" onChange={()=>setSkills([])} />
            <DeleteOutlineOutlinedIcon className='border border-gray-300' onClick={()=>deleteSkill(s.id)}/>      
        </Grid>
        )
}
</Grid>

        </form>
    </div>
  )
}

export default Skills
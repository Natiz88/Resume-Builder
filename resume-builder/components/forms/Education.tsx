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

const Education = () => {
  const dispatch = useDispatch();
  const educationList = useSelector((state:RootState) => state.info.education)
    interface educationType {
        id:String,
        school:String,
        degree:String,
        startData:Date | null,
        endDate:Date | null,
        city:String
    }
    const [educations,setEducations] = useState<educationType[]>([]);

    const addNewEducation = () => {
        setEducations([...educations,{
            id:uuidv4(),
            school:"",
            degree:"",
            startData:null,
            endDate:null,
            city:"",
        }])
    }

    const deleteEducation = (id:String) => {
        setEducations(educations.filter(edu => id !== edu.id))
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,id:String) => {
      const newEducation = educations.map(obj => {
        if (obj.id === id) {
          return {...obj, education: e.target.value};
        }
          return obj;
      });
      setEducations(newEducation)
    }

    const submitEducations = (e:FormEvent) => {
      e.preventDefault();
      dispatch(infoActions.updateEducations(educations))
    }

  return (
    <div className="w-full px-8 mt-8">
        <Button onClick={addNewEducation}>Add Education</Button>
        <form onSubmit={submitEducations}>
        <Grid container spacing={2}>
        {
        educations && educations.map(s => 
        <Grid item xs={12} key={s.id} className='flex items-center'>
            <TextField label="Education" value={s.education} fullWidth variant="outlined" onChange={(e)=>handleChange(e,s.id)} />
            <DeleteOutlineOutlinedIcon className='border border-gray-300' onClick={()=>deleteEducation(s.id)}/>      
        </Grid>
        )
}
</Grid>
<button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Education
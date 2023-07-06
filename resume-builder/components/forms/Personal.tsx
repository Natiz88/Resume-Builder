import {FormEvent, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
  Grid,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {infoActions} from '../../redux/reducers/InfoReducer';

import NextButton from "../NextButton";

const Personal = () => {
  const dispatch = useDispatch();
  interface infoP{
    name:String,
    bio:String,
    email:String,
    phone:String,
    address:String,
  }
  const [info,setInfo] = useState<infoP>({
    name:'',bio:'',email:'',phone:'',address:''})

  const submitInfo = (e:FormEvent) => {
    e.preventDefault();
    dispatch(infoActions.updatePersonalInfo(info))
  }

  return <div className="w-full px-8 mt-8">
    <h3 className="text-center py-4">Enter your personal details</h3>
    <form className=" p-2" onSubmit={submitInfo}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Full Name" fullWidth variant="outlined" onChange={(e)=>setInfo({...info,name:e.target.value})} />      </Grid>

        <Grid item xs={12}>
<TextField label="Something about Yourself" fullWidth multiline rows={4} variant="outlined" onChange={(e)=>setInfo({...info,bio:e.target.value})} />      </Grid>

<Grid item xs={12}>
 <TextField label="Email" fullWidth variant="outlined" onChange={(e)=>setInfo({...info,email:e.target.value})} />      </Grid>

 <Grid item xs={12}>
<TextField label="Address" fullWidth variant="outlined" onChange={(e)=>setInfo({...info,address:e.target.value})} />      </Grid>

<Grid item xs={12}>
 <TextField label="Phone" fullWidth variant="outlined" onChange={(e)=>setInfo({...info,phone:e.target.value})} />
      </Grid>
</Grid>
<button type="submit">Submit</button>

    </form>
    <NextButton/>
  </div>;
};

export default Personal;

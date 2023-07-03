import {useState} from "react";
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

import NextButton from "../NextButton";

const Personal = () => {
  interface info{
    name:String,
    bio:String,
    email:String,
    phone:String,
    address:String,
  }
  const [info,setInfo] = useState<info>({
    name:'',bio:'',email:'',phone:'',address:''})

  return <div className="w-full px-8 mt-8">
    <h3 className="text-center py-4">Enter your personal details</h3>
    <form className=" p-2">
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

    </form>
    <NextButton/>
  </div>;
};

export default Personal;

import {
  Grid,
  TextField,
} from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import {updateInfo} from '../../redux/reducers/InfoReducer';

import { RootState } from "@/redux/store";

const Personal = () => {
  const info = useSelector((state:RootState) => state.info.personalInfo)
  const dispatch = useDispatch();

  return <div className="w-full px-8 mt-8">
    <h3 className="text-center py-4">Enter your personal details</h3>
    <form className=" p-2">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Full Name" value={info.name} fullWidth variant="outlined" onChange={(e)=>dispatch(updateInfo({...info,name:e.target.value}))} />      </Grid>

        <Grid item xs={12}>
<TextField label="Something about Yourself" value={info.bio} fullWidth multiline rows={4} variant="outlined" onChange={(e)=>dispatch(updateInfo({...info,bio:e.target.value}))} />      </Grid>

<Grid item xs={12}>
 <TextField label="Email" fullWidth variant="outlined" value={info.email} onChange={(e)=>dispatch(updateInfo({...info,email:e.target.value}))} />      </Grid>

 <Grid item xs={12}>
<TextField label="Address" fullWidth variant="outlined" value={info.address} onChange={(e)=>dispatch(updateInfo({...info,address:e.target.value}))} />      </Grid>

<Grid item xs={12}>
 <TextField label="Phone" fullWidth variant="outlined" value={info.phone} onChange={(e)=>dispatch(updateInfo({...info,phone:e.target.value}))} />
      </Grid>
</Grid>
    </form>
  </div>;
};

export default Personal;

import React from "react";
import {
  Button,
  Card,
  Grid,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";

const Personal = () => {
  return <div className="w-full px-8 mt-8">
    <h3 className="text-center py-4">Enter your personal details</h3>
    <form className=" p-2">
    <Grid container spacing={2}>
      <Grid item xs={6}><TextField label="First Name" fullWidth variant="outlined" /></Grid><Grid item xs={6}>
      <TextField label="Last Name" fullWidth variant="outlined" /></Grid>
      <Grid item xs={12}><TextField label="City" fullWidth variant="outlined" /></Grid>
</Grid>

    </form>
  </div>;
};

export default Personal;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Basic = () => {
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    phone_number: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      user_image: "",
    },
    onSubmit: (data) => {
      console.log("submitted", data);
    },
  });

  let inputStyle =
    "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
  let labelStyle = "block text-gray-700 text-sm font-bold mb-2";
  const formSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div>
      <form onSubmit={formSubmit} autoComplete="off">
        <Card className="p-[10px]">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="first_name"
                label="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="last"
                label="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="image"
                label="Image"
                type="file"
                value={formik.values.user_image}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Card>
      </form>
      <div className="outline-red-400 w-[400px] h-[400px]">
        <img src={formik.user_image} alt="imageof" />
      </div>
    </div>
  );
};

export default Basic;

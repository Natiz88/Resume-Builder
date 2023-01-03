import React, { useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Basic = () => {
  const [img, setImg] = useState();
  const [imgPreview, setImgPreview] = useState();

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is Required"),
    last_name: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is Required"),
    phone_number: Yup.string().required("Phone Number is Required"),
    address: Yup.string().required("Address is Required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log("submitted", data);
    },
  });

  let inputStyle =
    "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
  let labelStyle = "block text-gray-700 text-sm font-bold mb-2";

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("called");
    formik.handleSubmit();
  };

  const imageChange = (e) => {
    let file = e.target.files[0];
    setImg(file);
    setPreview(file);
  };

  const setPreview = (file) => {
    setImgPreview(URL.createObjectURL(file));
  };

  const reader = new FileReader();
  reader.onload = () => {
    setImgPreview(reader.result);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        autoComplete="off"
        className="md:w-11/12 flex items-center justify-center bg-green-400 rounded-md m-auto"
      >
        <Card className="p-12">
          <div className="p-12 flex justify-center items-center">
            <Avatar
              alt="Remy Sharp"
              src={imgPreview}
              sx={{ width: 120, height: 120 }}
            />
          </div>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="first_name"
                label="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                error={
                  formik.touched.first_name && formik.errors.first_name
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="last_name"
                label="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                error={
                  formik.touched.last_name && formik.errors.last_name
                    ? true
                    : false
                }
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
                error={
                  formik.touched.email && formik.errors.email ? true : false
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="phone_number"
                label="Phone Number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                error={
                  formik.touched.phone_number && formik.errors.phone_number
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                error={
                  formik.touched.address && formik.errors.address ? true : false
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                name="image"
                type="file"
                onChange={(e) => imageChange(e)}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <div className="p-8 flex justify-center items-center">
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Basic;

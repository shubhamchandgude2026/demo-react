import React, { useContext, useEffect } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormContext } from '../../context/FormContextProvider';
import * as Yup from 'yup';

const Personaldetails = () => {
  const { formik } = useContext(FormContext);
  

  return (
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
  <TextField
    name="firstName"
    label="First Name"
    variant="outlined"
    value={formik.values.firstName}     
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}               
    error={formik.touched.firstName && Boolean(formik.errors.firstName)} // Show error if touched
    helperText={formik.touched.firstName && formik.errors.firstName}     // Display error message
  />

  <TextField
    name="lastName"
    label="Last Name"
    variant="outlined"
    value={formik.values.lastName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
    helperText={formik.touched.lastName && formik.errors.lastName}
  />

  <TextField
    name="mobile"
    label="Mobile"
    variant="outlined"
    value={formik.values.mobile}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
    helperText={formik.touched.mobile && formik.errors.mobile}
  />

  <TextField
    name="email"
    label="Email"
    variant="outlined"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
  />

  <FormControl fullWidth error={formik.touched.gender && Boolean(formik.errors.gender)}>
    <InputLabel id="gender-label">Gender</InputLabel>
    <Select
      labelId="gender-label"
      id="gender"
      name="gender"
      value={formik.values.gender || ''}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      <MenuItem value="">
        <em>Not specified</em>
      </MenuItem>
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </Select>
    {formik.touched.gender && formik.errors.gender && (
      <p style={{ color: 'red', fontSize: '0.8rem', margin: '3px 0 0 0' }}>
        {formik.errors.gender}
      </p>
    )}
  </FormControl>
</Box>
  );
};

export default Personaldetails;
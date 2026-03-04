import React, { useContext, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import { FormContext } from '../../context/FormContextProvider';
const Address = () => {
  const { formik } = useContext(FormContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
      <TextField
        name="country"
        label="Country"
        variant="outlined"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.country && Boolean(formik.errors.country)}
        helperText={formik.touched.country && formik.errors.country}

      />
      <TextField
        name="city"
        label="City"
        variant="outlined"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}               // Track touched state
        error={formik.touched.city && Boolean(formik.errors.city)} // Show error if touched
        helperText={formik.touched.city && formik.errors.city}
      />
      <TextField
        name="postalCode"
        label="Postal Code"
        variant="outlined"
        value={formik.values.postalCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}               // Track touched state
        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)} // Show error if touched
        helperText={formik.touched.postalCode && formik.errors.postalCode}
      />
    </Box>
  );
};

export default Address;
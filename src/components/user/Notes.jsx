import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material';
import { FormContext } from '../../context/FormContextProvider';

const Address = () => {
  const { formik } = useContext(FormContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
      <TextField
        name="notes"
        label="notes"
        variant="outlined"
        value={formik.initialValues.notes}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.notes && Boolean(formik.errors.notes)} 
        helperText={formik.touched.notes && formik.errors.notes}
      />
    </Box>
  );
};

export default Address;
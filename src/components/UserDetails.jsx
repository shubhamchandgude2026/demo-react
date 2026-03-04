import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import Personaldetails from './user/Personaldetails';
import Address from './user/Address';
import Notes from './user/Notes';
import { FormContext } from '../context/FormContextProvider';

const UserDetails = () => {
  const { formik } = useContext(FormContext);
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ margin: '2rem' }}>
        <h2>Personal Details</h2>
        <Personaldetails />
        
        <h2>Address Info</h2>
        <Address />
        
        <h2>Additional Notes</h2>
        <Notes />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '2rem' }}
        >
          Submit All Forms
        </Button>
      </Box>
    </form>
  );
};

export default UserDetails;
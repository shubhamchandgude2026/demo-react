import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/UserContextProvider'
import { Link } from 'react-router-dom';
import { useGetBooks } from '../queries/useGetBooks';
import { Box } from '@mui/material';

const Welcome = () => {
    const {formikFormData} = useContext(userContext);
    const {data:test,isLoading,refetch} = useGetBooks();
  return (
    <div>
     
      <button onClick={()=>refetch()}>Refetch </button>
        <h1>Welcome to demo project</h1>
        <Link style={{display:'block'}} to={'/'}>welcome</Link>
        <Link style={{display:'block'}} to={'/es6'}>Es6 Task</Link>
        <Link style={{display:'block'}} to={'/api'}>Fetch Products From API + Context API</Link>
        <Link style={{display:'block'}} to={'/params/:Admin'}>Use Params example</Link>
        <Link style={{display:'block'}} to={'/form'}>Formik Form</Link>
        <Link style={{display:'block'}} to={'/books'}>Get all books</Link>
        <Link style={{display:'block'}} to={'/infinite-scroll'}>Inifinite Scroll</Link>
        
    </div>
  )
}

export default Welcome
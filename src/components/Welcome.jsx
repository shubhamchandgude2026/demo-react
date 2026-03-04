import React, { useContext, useEffect } from 'react'
import { userContext } from '../context/UserContextProvider'
import { Link } from 'react-router-dom';

const Welcome = () => {
    const {formikFormData} = useContext(userContext);
  return (
    <div>
        <h1>Welcome to demo project</h1>
        <Link style={{display:'block'}} to={'/'}>welcome</Link>
        <Link style={{display:'block'}} to={'/es6'}>Es6 Task</Link>
        <Link style={{display:'block'}} to={'/api'}>Fetch Products From API + Context API</Link>
        <Link style={{display:'block'}} to={'/params/:Admin'}>Use Params example</Link>
        <Link style={{display:'block'}} to={'/form'}>Formik Form</Link>
    </div>
  )
}

export default Welcome
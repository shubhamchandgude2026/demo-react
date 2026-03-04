import { Formik, useFormik } from 'formik'
import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider';
import * as Yup from 'yup';

const FormikDemo = () => {
    const {setFormikFormData} = useContext(userContext);
     const nameSchema = Yup.object().shape({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().when('firstName', {
    is: (firstName) =>  firstName?.length < 5,  
    then: Yup.string().required('Last name is required '),
     
  }),

    })

     const formik = useFormik({

     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },

     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
        setFormikFormData(values);
     },
     validationSchema:nameSchema,
     enableReinitialize:true
   });

   

    console.log("formik ",formik.values , "errors :",formik.errors);
    
  return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
    {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
  )
}

export default FormikDemo
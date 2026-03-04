import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const Formik = () => {
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        cpassword:'',
    }
      const userSchema  = Yup.object({
        name:Yup.string().min(4,"Name is longer than 4 characters").required(),
        email:Yup.string().email().required(),
        phone:Yup.number().min(10).required(),
        password:Yup.string().min(8,"Password must be 8 characters long"),
        cpassword:Yup.string().required("confirm password is required")
        .when("password",
  	        (password, schema) =>
    	password && password.length >= 8
      	? schema.oneOf([Yup.ref("password")], "Passwords must match")
      	: schema
	)
    });
    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues:initialValues,
        onSubmit:(values)=>
        {
            console.log(values);    
        },
        validationSchema: userSchema,
        enableReinitialize:true
    })
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleChange} value={values.name}/>
        {
            (touched.name && errors.name) &&
            <div style={{color:'red'}}>{errors.name}</div>
        }
        <input type="email" name='email'onChange={handleChange} value={values.email}/>
         {
            (touched.email && errors.email) &&
            <div style={{color:'red'}}>{errors.email}</div>
        }
        <input type="number" name='phone' onChange={handleChange} value={values.phone}/>
         {
            (touched.phone && errors.phone) &&
            <div style={{color:'red'}}>{errors.phone}</div>
        }
        <input type="text" name='password' onChange={handleChange} value={values.password}/>
         {
            (touched.password && errors.password) &&
            <div style={{color:'red'}}>{errors.password}</div>
        }
        <input type="text" name='cpassword' onChange={handleChange} value={values.cpassword}/>
         {
            (touched.cpassword && errors.cpassword) &&
            <div style={{color:'red'}}>{errors.cpassword}</div>
        }
        <button type='submit'>submit</button>
    </form>
  )
}

export default Formik
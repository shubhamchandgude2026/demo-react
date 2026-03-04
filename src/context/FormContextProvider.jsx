import { useFormik } from 'formik';
import { createContext, useState } from 'react';
import * as Yup from 'yup';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      gender: '',
      country: '',
      city: '',
      postalCode: '',
    },
    onSubmit: (values) => {
      console.log('submitted with values:', values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(4,"").required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
    .email('Invalid email')
    .test('email-or-mobile', 'Either email or mobile is required', function (value) {
      const { mobile } = this.parent; // Get mobile field value
      // If mobile is empty and email is also empty, we trigger an error
      if (!value && !mobile) {
        return false;
      }
      return true;
    }),

  mobile: Yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
    .test('email-or-mobile', 'Either email or mobile is required', function (value) {
      const { email } = this.parent; // Get email field value
      // If email is empty and mobile is also empty, we trigger an error
      if (!value && !email) {
        return false;
      }
      return true;
    }),
      gender: Yup.string().required('Gender is required'),
      country: Yup.string().required('country is required'),
      city: Yup.string().required('city is required'),
      postalCode: Yup.string().required('postal code is required'),
      notes: Yup.string(),
    }),
    enableReinitialize: true,
  })
 

  const formContextValues = { formik };

  return (
    <FormContext.Provider value={formContextValues}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
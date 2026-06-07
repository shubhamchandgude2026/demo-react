import { Formik, useFormik } from 'formik'
import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const FormikDemo = () => {
  const { setFormikFormData } = useContext(userContext);
  const nameSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().when('firstName', {
      is: (firstName) => firstName?.length < 5,
      then: (schema) => schema.required('Last name is required since first name is short'),
    }),
  });

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
    validationSchema: nameSchema,
    enableReinitialize: true
  });

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6 py-12 md:py-20">

        {/* Header */}
        <header className="border-b border-slate-900 pb-8 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
            Formik Playground
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Schema validation demo using Formik state bindings and Yup validators.
          </p>
        </header>

        <main>
          <form
            onSubmit={formik.handleSubmit}
            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-8 backdrop-blur-md space-y-6"
            style={{ padding: '2rem' }}
          >
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs font-semibold text-slate-300">
                First Name <span className="text-indigo-400">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="John"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">
                  ⚠ {formik.errors.firstName}
                </div>
              ) : null}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-semibold text-slate-300">
                Last Name {formik.values.firstName.length < 5 && formik.values.firstName.length > 0 && <span className="text-indigo-400">*</span>}
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="Doe"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">
                  ⚠ {formik.errors.lastName}
                </div>
              ) : null}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full text-center text-sm bg-indigo-600 hover:bg-indigo-550 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-indigo-950 cursor-pointer"
            >
              Submit Form
            </button>
          </form>
        </main>

      </div>
    </div>
  );
}

export default FormikDemo;
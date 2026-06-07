import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Formik = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  }
  const userSchema = Yup.object({
    name: Yup.string().min(4, "Name must be longer than 4 characters").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    cpassword: Yup.string().required("Confirm password is required")
      .when("password",
        (password, schema) =>
          password && password.length >= 8
            ? schema.oneOf([Yup.ref("password")], "Passwords must match")
            : schema
      )
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      alert("Registration successful:\n" + JSON.stringify(values, null, 2));
    },
    validationSchema: userSchema,
    enableReinitialize: true
  })

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
            User Registration Form
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Form validations using Formik with error reporting for credential schema creation.
          </p>
        </header>

        <main>
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-8 backdrop-blur-md space-y-6"
            style={{ padding: '2rem' }}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold text-slate-300">Name</label>
              <input
                id="name"
                type="text"
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="Full Name"
              />
              {touched.name && errors.name && (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">⚠ {errors.name}</div>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-300">Email Address</label>
              <input
                id="email"
                type="email"
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="email@example.com"
              />
              {touched.email && errors.email && (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">⚠ {errors.email}</div>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-semibold text-slate-300">Phone Number</label>
              <input
                id="phone"
                type="number"
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="9876543210"
              />
              {touched.phone && errors.phone && (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">⚠ {errors.phone}</div>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-xs font-semibold text-slate-300">Password</label>
              <input
                id="password"
                type="password"
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              {touched.password && errors.password && (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">⚠ {errors.password}</div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="cpassword" className="text-xs font-semibold text-slate-300">Confirm Password</label>
              <input
                id="cpassword"
                type="password"
                name='cpassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpassword}
                className="bg-slate-950 border border-slate-800 focus:border-indigo-500/50 rounded-xl px-6 py-4 text-sm focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              {touched.cpassword && errors.cpassword && (
                <div className="text-xs text-rose-400 font-medium mt-1 font-mono">⚠ {errors.cpassword}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-center text-sm bg-indigo-600 hover:bg-indigo-550 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-indigo-950 cursor-pointer"
            >
              Register Account
            </button>
          </form>
        </main>

      </div>
    </div>
  );
}

export default Formik;
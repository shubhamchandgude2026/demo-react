import { Component, useState } from 'react'

import './App.css'
import ES6 from './components/ES6';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import API from './components/API';
import Params from './components/Params';
import FormikDemo from './components/FormikDemo';
import Welcome from './components/Welcome';
import ProtectedAuth from './context/AuthProvider';
import Formik from './components/Formik';
import UserDetails from './components/UserDetails';
import FormContextProvider from './context/FormContextProvider';
function App() {
  return (
    <FormContextProvider>
    <Router>
      <Routes>
        <Route element={<Welcome/>} path='/'/>
        <Route element={<ES6/>} path='/es6'/>
        <Route element={
          <ProtectedAuth>
            <API/>
          </ProtectedAuth>
          } path='/api'/>
        <Route element={<Params/>} path='/params/:username' />
        <Route element={<FormikDemo/>} path='/form'/>
        <Route element={<Formik/>} path='/formik'/>
        <Route element={<UserDetails/>} path='/user'/>
      </Routes>
    </Router>

    
    </FormContextProvider>
  )
}

export default App

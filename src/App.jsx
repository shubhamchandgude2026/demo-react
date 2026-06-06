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
import ShowUsers from './components/utils/UserCard';
import Books from './components/books/Books';
import CoverPhotos from './components/coverPhotos/CoverPhotos';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
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
        <Route element={<ShowUsers/>} path='/fetch-user'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<CoverPhotos/>} path='/coverphoto'/>
        <Route element={<InfiniteScroll/>} path='/infinite-scroll'/>
      </Routes>
    </Router>

    
    </FormContextProvider>
  )
}

export default App

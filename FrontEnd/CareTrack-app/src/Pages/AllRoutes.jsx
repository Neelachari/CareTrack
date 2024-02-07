import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { Signup } from './Signup'
import { Patients } from './Patients'
import { PrivateRoute } from './PrivateRoute'
import { EditPatient } from './EditPatient'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/register" element={<Signup/>} ></Route>
     <Route path="/Patients" element={ <PrivateRoute><Patients/></PrivateRoute> } ></Route>
     <Route path="/EditPatient/:_id" element={ <EditPatient/>} ></Route>
    </Routes>
  )
}

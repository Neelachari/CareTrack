import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { Signup } from './Signup'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/register" element={<Signup/>} ></Route>
    </Routes>
  )
}

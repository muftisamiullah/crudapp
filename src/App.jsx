import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from "./screen1/Login"
import Crud from './screen2/Crud'
import Navbar from './Components/Navbar'

const App = () => {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/search" element={<Crud/>}/>
    </Routes>
  </>
  )
}

export default App

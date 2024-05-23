import React from 'react'
import Search from './screen2/Search'
import {Routes , Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './screen1/Home'
import Updatedata from "./Pages/Updatedata"

const App = () => {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/update/:id" element={<Updatedata/>}/>
    
    </Routes>
  </>
  )
}

export default App

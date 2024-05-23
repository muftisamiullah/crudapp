import React from 'react'
import {Link} from "react-router-dom"
import "../Components/navbar.css"
const Navbar = () => {
  return(
    <>
     <nav>
    <div className="navbar">
      <div className="logo"><Link to="#">Logo</Link></div>
      <ul className="menu">
          <li><Link to="/">Help Center</Link></li>
          <li><Link to="/">My library</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">About</Link></li>
      </ul>
    </div>
  </nav> 
      </>
  )
}

export default Navbar

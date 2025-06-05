import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/workexperience"}>Work Expereince</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}

export default NavBar

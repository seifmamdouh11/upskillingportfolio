import React from 'react'
import profilePhoto from '../../images/about-BgAkqdr2.jpg'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column align-items-center text-center text-white py-5 px-4">
      <div className="profile-photo">
      <img src={profilePhoto} alt=""/>
      </div>
      <h3 className="mt-4 text-dark">Jackson Ford</h3>
      <span className='text-uppercase'><a href="">UI/UX/Designer</a> in Philippines</span>
      <ul className='mt-4'>
        <li><NavLink to="home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="skills" activeClassName="active">Skills</NavLink></li>
        <li><NavLink to="experience" activeClassName="active">Experience</NavLink></li>
        <li><NavLink to="work" activeClassName="active">Work</NavLink></li>
      </ul>
    </div>
  )
}

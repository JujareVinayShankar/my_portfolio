import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { IoMdHome } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { GiJourney } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

export default function Header() {
  return (
    <div className='nav-container'>
      <div className="nav-small">
        <nav className="nav-bar-small">
          <h1 className="my-name name-small">My <span>Portfolio</span></h1>
          <ul className="link-list">
            <li className="link-element">
              <Link to="/" className='link'><IoMdHome /></Link>
            </li>
            <li className="link-element">
              <Link to="/about" className='link'><SiAboutdotme />
              </Link>
            </li>
            <li className="link-element">
              <Link to="/my-journey" className='link'><GiJourney />
              </Link>
            </li>
            <li className="link-element">
              <Link to="/my-skills" className='link'><GiSkills />
              </Link>
            </li>
            <li className="link-element">
              <Link to="/my-projects" className='link'><GrProjects />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-large">
        <nav className="nav-bar">
          <h1 className="my-name">My <span>Portfolio</span></h1>
          <ul className="link-list">
            <li className="link-element">
              <Link to="/" className='link'>Home</Link>
            </li>
            <li className="link-element">
              <Link to="/about" className='link'>About</Link>
            </li>
            <li className="link-element">
              <Link to="/my-journey" className='link'>My Journey</Link>
            </li>
            <li className="link-element">
              <Link to="/my-skills" className='link'>Skills</Link>
            </li>
            <li className="link-element">
              <Link to="/my-projects" className='link'>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

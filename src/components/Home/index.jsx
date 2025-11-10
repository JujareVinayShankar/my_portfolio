import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import myImage from './my_image.jpeg';
import './index.css'
export default function Home() {
      return (
            <div className='bg-container'>
                  <div className="left-bg-container">
                        <h1 className="hello-heading">Hello, <span>World</span></h1>
                        <h1 className="name"><span className="i-am">I am, </span>Jujare <span className='first-name'>Vinay Shankar</span></h1>
                        <h1 className="description-head">I am a Python Full Stack Developer</h1>
                        <p className="description">Software Engineer Fresher with Burning Desire to learn, build any thing that helps both me and my organization to grow and thrive with knowledge and purpose.
                        </p>
                        <p className="description">
                              Consider my accounts below to connect with me.
                        </p>
                        <div className="icons-container">
                              <a href="https://www.linkedin.com/in/vinay-shankar-jujare-5267721ab/" className="contact-link" target='new_tab'><AiFillLinkedin /></a>
                              <a href="https://github.com/JujareVinayShankar?tab=repositories" className="contact-link" target='tab'><FaGithub /></a>
                        </div>
                  </div>
                  <div className="right-bg-container">
                        <img src={myImage} alt="my_image" className="profile-image" />
                  </div>
            </div>
      )
}

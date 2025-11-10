import React from 'react'
import './index.css'
import myImage from './my_image.jpeg';

export default function About() {
  return (
    <div className='about-container'>
      <h1 className="about-heading">About <span className="about-me">Me</span></h1>
      <img src={myImage} alt="" className="about-me-image" />
      <h1 className="about-name">Jujare Vinay Shankar</h1>
      <h1 className="about-role">Python Full Stack Developer</h1>
      <p className="about-description">Software Engineer Fresher with Burning Desire to learn, build any thing that helps both me and my organization to grow and thrive with knowledge and purpose.
        I have real time experience on building projects.
        I took a MERN Full Stack Development course in CCBP Academy(NIAT). I have built job searching web application,
        ecommerce web application, a clone of amazon, flipkart with proper Authentication and Authorization by using variuos storing mechanisms and many more.
      </p>
      <div className="technologies-container">
        <div className="tech-container">
          <h1 className="skill-name">Front End Technologies</h1>
          <ul className="unordered-list">
            <li className="list">HTML</li>
            <li className="list">CSS</li>
            <li className="list">Bootstrap</li>
            <li className="list">JavaScript</li>
            <li className="list">React JS</li>
          </ul>
        </div>
        <div className="tech-container">
          <h1 className="skill-name">Back End Technologies</h1>
          <ul className="unordered-list">
            <li>Python</li>
            <li>Java</li>
            <li className="list">Node JS</li>
            <li className="list">Express JS</li>
          </ul>
        </div>
        <div className="tech-container">
          <h1 className="skill-name">DataBases</h1>
          <ul className="unordered-list">
            <li className='list'>Sqlite</li>
            <li className='list'>Mongo DB</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

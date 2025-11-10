import React from 'react'
import './index.css'
export default function MyJourney() {
      return (
            <div className='myjourney-container'>
                  <h1 className="my-journey-heading">My <span className="my-journey-heading">Journey</span></h1>
                  <div className="my-journey-content">
                        <h1 className="journey-name">Education</h1>
                        <div className="center-container">
                              <div className="journey-box">
                                    <p className='journey-year'>2022-present</p>
                                    <h1 className='journey-qualification'>Python Full Stack Development</h1>
                                    <p className='journey-area'>CCBP Nextwave Academy</p>
                              </div>
                              <div className="journey-box">
                                    <p className='journey-year'>2023-2026</p>
                                    <h1 className='journey-qualification'>Bachelor's degree in Computer Science and Engineering</h1>
                                    <p className='journey-area'>Chiranjeevi Reddy Institute of Technology</p>
                              </div>
                              <div className="journey-box">
                                    <p className='journey-year'>2018-2021</p>
                                    <h1 className='journey-qualification'>Diploma in Mechanical Engineering</h1>
                                    <p className='journey-area'>Govt. Ploytechnic, Anantapur</p>
                                    <p className="journey-percentage">90 percentage</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

import React from 'react'
import './index.css'
export default function MyProjects() {
      return (
            <div className='my-projects-container'>
                  <h1 className="projects-heading">My <span className="project">Projects</span></h1>

                  <div className="project-container">
                        <div className="top-container">
                              <h1 className="project-name">Jobby App</h1>
                              <a href="https://jobbyapp.ccbp.tech/login" className="project-link">project-link</a>
                        </div>
                        <h1 className="technologies"><span className="used">Technologies Used: </span>React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local
                              Storage, JWT Token, Authorization, Authentication</h1>
                        <p className="project-description">Implemented Jobby App where users can log in and can see a list of jobs with
                              search by Job title, filters based on Salary range and Employment type, etc</p>
                        <ul className="project-details">
                              <li className="project-item">Implemented different pages like Login, Home, Jobs, Job item details
                                    using React components, props, state, lists, event handlers, form inputs.</li>
                              <li className="project-item">Authenticating by taking username, password and doing login post HTTP
                                    API Call</li>
                              <li className="project-item">Persisted user login state by keeping jwt token in client storage, Sending
                                    it in headers of further API calls to authorize the user</li>
                              <li className="project-item">Implemented different routes for Login, Home, Jobs, Job item details
                                    pages by using React Router components Route, Switch, Link</li>
                              <li className="project-item"> Implemented filters and search text by sending them as query
                                    parameters to jobs API calls</li>
                              <li className="project-item">Redirecting to the login page if the user tries to open Home, Jobs, Job
                                    item details routes which need authentication by implementing protected
                                    Route.</li>
                        </ul>
                  </div>
                  <div className="project-container">
                        <div className="top-container">
                              <h1 className="project-name">Nxt Trendz ( ECommerce Clone- Amazon, Flipkart)</h1>
                              <a href="https://ecommerceclone.ccbp.tech/login" className="project-link">project-link</a>
                        </div>
                        <h1 className="technologies"><span className="used">Technologies Used: </span> React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local
                              Storage, JWT Token, Authorization, Authentication</h1>
                        <p className="project-description">Developed a cutting-edge e-commerce platform inspired by Amazon and
                              Flipkart.</p>
                        <ul className="project-details">
                              <li className="project-item">Builtpages for Login, Products, and Product details with React Router,
                                    React components, form inputs, and event handlers</li>
                              <li className="project-item">Enabled secure authentication and authorization with JWT tokens and
                                    REST API calls</li>
                        </ul>
                  </div>
                  <div className="project-container">
                        <div className="top-container">
                              <h1 className="project-name">Todos Application</h1>
                        </div>
                        <h1 className="technologies"><span className="used">Technologies Used: </span>HTML, CSS, Bootstrap, Javascript</h1>
                        <p className="project-description">Acomprehensive todo management tool designed to enhance productivity</p>
                        <ul className="project-details">
                              <li className="project-item">User-friendly interface with HTML, CSS, and Bootstrap for ease of use</li>
                              <li className="project-item">Effortless task management through JavaScript-based CRUD operations
                                    with dynamic UI updates.</li>
                              <li className="project-item">Yourtasks are always safe with local storage methods to ensure task
                                    persistence</li>
                        </ul>
                  </div>
            </div>
      )
}

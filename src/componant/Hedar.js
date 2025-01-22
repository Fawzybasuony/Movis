import React from 'react'
import { NavLink } from "react-router-dom";

export default function Hedar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg    shadow-5">
          <div className="container">
            <h2 className='me-2'>
             C l N E <span className='fs-2 text-danger me-5'> R A M A</span> 
            </h2>
            <button
              className="navbar-toggler ggg"
              type="button"
              
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon ccc" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link fs-4" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/Moveis">
                   Moveis
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/Contact">
                    Contact
                  </NavLink>
                </li>
           
              </ul>
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
            
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/">
                    <i className="fab fa-twitter" />
                  </NavLink>
                </li>


                <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/">
                    <i className="fab fa-instagram" />
                  </NavLink>
                </li>

                    <li className="nav-item me-3 me-lg-0">
                  <NavLink className="nav-link" to="/">
                  <i className="fa-brands fa-facebook"></i>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    
    </>
  )
}

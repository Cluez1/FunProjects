import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              to="/login"
              className="navbar-brand fw-bolder fs-4 mx-auto"
            >
              COLORS, enhance your Business
            </Link>
            {props.auth ?
            <>
            <Link
              to="/register"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
            <i className="fa fa-sign-in me-2"></i>Login</Link>
            <Link to='/register' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
            <i className="fa fa-user-plus me-2"></i>Register</Link>
            </>
            :
            <>
            <Link to='dashboard' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
            
            <i className="fa fa-user-plus me-2"></i>Dashboard</Link>
            <Link to='/logout' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
            <i className="fa fa-sign-out me-2"></i>Logout</Link>
            </>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

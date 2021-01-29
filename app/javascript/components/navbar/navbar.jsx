import React from 'react';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'images/logo.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom';

  

const NavBar = () => {
  return (
 
      <React.Fragment>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark static-top">
  <div className="container">
  <a className="navbar-brand" href="#">
    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
    Cybele Project
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Signup</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </React.Fragment>
    );
};

export default NavBar;



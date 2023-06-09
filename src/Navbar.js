import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

 function Navbar(props) {
  const mystyle1 = {
    height: '20px',
    width: '20px', 
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to right, black, blue)',
  border: '2px solid white'
  
};
const mystyle2 = {
  height: '20px',
  width: '20px', 
  borderRadius: '10px',
  backgroundImage: 'linear-gradient(to right, black, green)',
  border: '2px solid white'

};
const mystyle3 = {
  height: '20px',
  width: '20px', 
  borderRadius: '10px',
  backgroundImage: 'linear-gradient(to right, black, yellow)',
  border: '2px solid white'
};
 
  return (
  <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <NavLink className={`navbar-brand text-${props.mode === "primary"?"dark":"primary"}`} to="/home">React</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className={`nav-link active text-${props.mode === "primary"?"dark":"primary"}`} aria-current="page" to="/TextForm">Editor</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={`nav-link text-${props.mode === "primary"?"dark":"primary"}`} aria-current="page" to="/Page">Page</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
      <div className="d-flex container">
          <div className="m-2" style={mystyle1} onClick={props.toggleblue}></div>
          <div className="m-2" style={mystyle2} onClick={props.togglegreen}></div>
          <div className="m-2" style={mystyle3} onClick={props.toggleyellow}></div>
        </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
        <div className="form-check form-switch m-2 ">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handletoggle} />
              <label className={`form-check-label text-${props.mode === "dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">
                Enable {props.mode === "dark"?`light`:`dark`} mode
              </label>
            </div>
  </div>
</nav>
  </>
)
}

Navbar.propTypes = {title: PropTypes.string,
    about: PropTypes.string }

    Navbar.defaultProps = {title: "set title",
                            about: "set about"}

    export default Navbar;
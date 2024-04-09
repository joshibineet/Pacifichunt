import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import Model from 'react-modal'
import Signup from "./Signup";

const Navbar = () => {
  const [menu, setMenu]= useState("Home");

  const setActiveMenu = (menuItem) => {
    setMenu(menuItem);
  };
  const [visible,setvisible]=useState(false)
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar_links">
          <div className="nav_links_container">
            {/* <Link to="/" className='active' >Home</Link> */}
            
            <Link to="/" className={menu === 'Home' ? 'active' : ''} onClick={() => setActiveMenu('Home')} >Home</Link>
            <Link to="/Jobs" className={menu === 'Jobs' ? 'active' : ''} onClick={() => setActiveMenu('Jobs')}>Jobs</Link>
            <Link to="/Companies" className={menu === 'Companies' ? 'active' : ''} onClick={() => setActiveMenu('Companies')}>Companies</Link>
            <Link to="/About_us" className={menu === 'About_us' ? 'active' : ''} onClick={() => setActiveMenu('About_us')}>About us</Link>
           
          </div>
          <div className="nav_button">
                <button className="sign_up" onClick={()=>setvisible(true)}>Sign Up</button>
                <Model isOpen={visible} onRequestClose={()=>setvisible(false)} style={{ overlay: { zIndex: 9 }, content: { zIndex: 9 } }}>
                   <Signup />
                </Model>
                <button className="post_ajob">Post a Job</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

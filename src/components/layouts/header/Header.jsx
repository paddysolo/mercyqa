import React, { useContext } from "react";
import { ReactComponent as Logo } from "./../../../assets/sylvalogoui.svg";
import "./header.css";
import { NavLink, useOutletContext } from "react-router-dom";
import { LayoutContext } from "../Layout";

export const Header = () => {

  const {expRef,skillRef,aboutRef} = useContext(LayoutContext);

  return (
    <header>
      <NavLink className="myLogoLink" to="/">
        {/* <Logo /> */}
        <p className="mylogo">QAmercy</p>
      </NavLink>

      <input type="checkbox" id="check" />
      <label for="check" class="icons">
        <i class="bx bx-menu" id="menu-icon"></i>
        <i class="bx bx-x" id="close-icon"></i>
      </label>

      <nav class="navbar">
        {/* <a href="#" class="nav-item" style={{"--i": 0}}>Projects</a> */}
        <NavLink
          className="nav-item"
          onClick={()=>{aboutRef.current?.scrollIntoView({behavior:'smooth'})}}
        >
          About Me
        </NavLink>

        <NavLink
          className="nav-item"
          onClick={()=>{skillRef.current?.scrollIntoView({behavior:'smooth'})}}
        >
          My Skills
        </NavLink>

        <NavLink
          className="nav-item"
          onClick={()=>{expRef.current?.scrollIntoView({behavior:'smooth'})}}
          // style={({ isActive }) => ({ color: isActive ? "#45ad7e" : "#000" })}
        >
          My Experience
        </NavLink>
     
        <NavLink
          className="nav-item"
        
        >
          Contact Me
        </NavLink>
        <NavLink
          className="nav-item"
          to="/blog"
          style={({ isActive }) => ({ color: isActive ? "#45ad7e" : "#000" })}
        >
          Blog
        </NavLink>
        {/* <a href="#" class="nav-item" style={{"--i": 1}}>About</a> */}
        {/* <a  href="https://www.linkedin.com/in/mercyokoduwa/" class="nav-item"     target="_blank" style={{"--i": 2}}>LinkedIn</a> */}
        <a href="https://drive.google.com/u/2/uc?id=1hKCtAU9lxKlOQRxNNpcPNFzmprRfd41R&export=download" 
        target="_blank"
        class="nav-item download" style={{ "--i": 3 }}>
          Download CV
        </a>
      </nav>
    </header>
  );
};

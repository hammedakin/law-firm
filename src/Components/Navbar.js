import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import logo from './logo.svg'
const Navbar = () => {


  return (
    <>
      <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container">

     

        <Link to="/home" className="navbar-brand" >
          <img src={logo} width="20%" alt="logo" loading="lazy" /> <span class="name">STRONFORTE </span> 
        </Link>

        <a
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon toggler">
            <box-icon class="box-icon" size='2rem' color=" #031838" name="menu" type="logo"></box-icon>

            

          </span>
        </a>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav ml-auto text-center animated fadeInLeft">

            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/about">
                ABOUT US
              </NavLink>
            </li>


            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/sector">
               SECTOR
              </NavLink>
            </li>



            <li class="nav-item">
              <a tag={Link} activeClassName="active1" target="_blank" href="#!">
                BLOG
              </a>
            </li>


            <li class="nav-item">
              <NavLink tag={Link} activeClassName="active1" to="/contact">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

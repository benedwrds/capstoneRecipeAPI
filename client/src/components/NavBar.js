import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
//import Register from './Register'

const Navigation = () => {
  return (
    <div>
      <AppBar position="relative">
          <Toolbar>
              <IconButton color="inherit">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: "1" }}>
                  Tengo Hambre
              </Typography>
              <ul className="nav-list">
                  <li className="nav-list-item">
                       <Link to="/login">Login</Link> 
                  </li>   
                  <li className="nav-list-item">
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
              </ul>
          </Toolbar>
      </AppBar>
      {/* <Register/> */}
      </div>
  )
}

export default Navigation
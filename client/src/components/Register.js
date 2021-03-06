import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

//import axios from 'axios';

class Register extends Component{
  //render() {
    //this.state = {

      componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    state = {
      // firstName: '',
      // lastName : '',
      // userName : '',
      // password: ''
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

  onSubmit = e => {
      e.preventDefault();

  const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };

      this.props.registerUser(newUser, this.props.history); 
    };
    
  // render(){
render(){
    //const { errors } = this.state; is the same as doing const errors = this.state.errors;. 
    const { errors } = this.state;
  return ( 
 
    <div className="container">
    <div className="row">
      <div className="col s8 offset-s2">
        <Link to="/" className="btn-flat waves-effect">
          {/* <i className="material-icons left">keyboard_backspace</i> Back to
          home */}
        <Button>Home</Button>
        </Link>
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Register</b> below
          </h4>
          <p className="grey-text text-darken-1">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name
              })}
            />
            <label htmlFor="name">Name</label>
            <span className="red-text">{errors.name}</span>
          </div>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email
              })}
            />
            <label htmlFor="email">Email</label>
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password
              })}/>
            <label htmlFor="password">Password</label>
            <span className="red-text">{errors.password}</span>
          </div>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2
              })}
            />
            <label htmlFor="password2">Confirm Password</label>
            <span className="red-text">{errors.password2}</span>

          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  //   <div className="App">
  //   <Container maxWidth="sm">
  //     <form className="login-form" onSubmit={this.login}>
  //       <TextField
  //         required
  //         onChange={this.handleTextChange}
  //         value={this.state.firstName}
  //         name="firstName"
  //         label="First Name"
  //         type="text" />
  //         <br/>
  //       <TextField
  //         required
  //         onChange={this.handleTextChange}
  //         value={this.state.lastName}
  //         name="lastName"
  //         label="Last Name"
  //         type="text" />
  //         <br/>
  //       <TextField
  //         required
  //         onChange={this.handleTextChange}
  //         value={this.state.userName}
  //         name="userName"
  //         label="Username"
  //         type="text" 
  //         required />
  //         <br/>
  //        <TextField
  //         required
  //         onChange={this.handleTextChange}
  //         value={this.state.password}
  //         name="password"
  //         label="password"
  //         type="password" 
  //        required />
  //         <br/>
  //          <TextField
  //         required
  //         onChange={this.handleTextChange}
  //         value={this.state.verifyPassword}
  //         name="verifyPassword"
  //         label="verify password"
  //         type="password" />
  //         <br/>
  //         <br/>
  //       <Button
  //         type="submit"
  //         className="login-button"
  //         variant="contained"
  //         color="primary">Create User</Button>       
  //     </form>
  //   </Container>
  // </div>
    )
  }
} 

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));


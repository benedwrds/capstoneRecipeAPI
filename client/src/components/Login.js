import React, { Component } from 'react'
//import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class Login extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

    state = { 
      // username: '',
      // password: ''
      email: "",
      password: "",
      errors: {}
    }

  // handleTextChange = (e) => {
  //   const state = { ...this.state }
  //   state[e.target.name] = e.target.value
  //   this.setState(state)
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
   // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  // login = (e) => {
  //   // debugger
  //   e.preventDefault()
  //   // set cookie here
  //   // set loggedIn = true and max-age = 60*1000 (one minute)
  //   //this.props.loggedIn();
  //   // document.cookie = "loggedIn=true;max-age=60*1000"
  //   // window.location.replace("/")
  //   this.props.history.push("/")
  // }

  render() {
    const { errors } = this.state;

    return (

      <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      
      // <div className="App">
      //   <Container maxWidth="sm">
      //     <form className="login-form" onSubmit={this.login}>
      //       <TextField
      //         required
      //         onChange={this.handleTextChange}
      //         value={this.state.username}
      //         name="username"
      //         label="Username"
      //         type="text" />
      //         <br/>
      //       <TextField
      //         required
      //         onChange={this.handleTextChange}
      //         value={this.state.password}
      //         name="password"
      //         label="Password"
      //         type="password" />
      //         <br/>
      //         <br/>
      //       <Button
      //         type="submit"
      //         className="login-button"
      //         variant="contained"
      //         color="primary">Login
      //       </Button>  
      //         <br/>
      //         {/* <br/>   */}
      //         <Link to="/register">
      //         {/* <a href="/register"> */}
      //       <Button
      //         type="submit"
      //         className="login-button"
      //         variant="contained"
      //         color="primary"
      //         style={{margin: '10px'}}
              
      //         >Register?
      //         </Button> 
      //         </Link>    
      //          {/* </a> */}
      //     </form>
      //   </Container>
      // </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

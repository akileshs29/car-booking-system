import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index1.css';
import imgUrl from '../assets/all-images/blog-img/profile.png';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pass: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, pass } = this.state;
    console.log(fname, lname, email, pass);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user");
        if (data.status === 'ok') {
          toast.success("User is Registered");
          window.location.reload();
          window.location.replace('/home');
          
        } 
          else if (data.error === 'User Exists') {  // Check for 'User Exists' here
            toast.error("User already exists");
          } else {
            toast.error("Something Went Wrong");
          }
        
      });
  }

  render() {
    return (
      <div className="back">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <div className="blockglow">
            <div className="blurrr">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    <img src={imgUrl} alt="profile" className="profile" />
                  </div>
                </div>
                <h3>Sign Up</h3>

                <div className="mb-3">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    required
                    onChange={(e) => this.setState({ fname: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    required
                    onChange={(e) => this.setState({ lname: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password">
                  Already registered <a href="login">sign in?</a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index1.css';
import imgUrl from '../assets/all-images/blog-img/profile.png';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      userData: null, // To store user data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, pass } = this.state;
    console.log(email, pass);
    fetch('http://localhost:5000/login', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'user');
        if (data.status === 'ok') {
          toast.success('Login successful');
          // After successful login, save the token in local storage or state
          localStorage.setItem('token', data.data); // Assuming the token is in data.data
          
          window.location.reload(); 
          window.location.replace("/home");               
          this.fetchUserData(data.data); // Pass the token to the function
        } else if (data.status === 'error' && data.error === 'User Not Found') {
          toast.error('User not found. Please check your email.');
        } else if (data.status === 'error' && data.error === 'Invalid Password') {
          toast.error('Invalid Password. Please check your password.');
        }
      });
  }

  fetchUserData(token) {
    // Fetch user data using the token from the server
    fetch('http://localhost:5000/userData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token }), // Make sure to send the token as an object with a "token" property
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log('User Data Response:', userData);
        // Set the fetched user data in the component state
        this.setState({ userData });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  render() {
    return (
      <div className="back">
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <div className="blockglow">
            <div className="blurrr">
              <div className="imgs">
                <div className="container-image">
                  <img src={imgUrl} alt="profile" className="profile" />
                </div>
              </div>
              <h3>Sign In</h3>
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

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    required
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password">
                Forgot <a href="signup">SignUp</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

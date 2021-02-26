import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialValues = {
    username: '',
    password: '',
  };
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [values, setValues] = useState(initialValues);
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input
              name='username'
              type='text'
              value={values.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

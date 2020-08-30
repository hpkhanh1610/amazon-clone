import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    event.preventDefault(); // this stops the refresh when submitting the form
    // login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        // logged-in, redirect to homepage
        history.push('/');

      })
      .catch(e => alert(e.message));
  }

  const register = event => {
    event.preventDefault(); // this stops the refresh when submitting the form
    // register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // created user and logged-in, redirect to homepage
        history.push('/');
      })
      .catch(e => alert(e.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
          alt="" 
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button onClick={register}>Create your Amazon account</button>
      </div>

    </div>
  )
}

export default Login

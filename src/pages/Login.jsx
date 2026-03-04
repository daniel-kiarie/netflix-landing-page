import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {
  return (
    <div className='login_container'>
      
      <div className='login'>
        <h1>Login</h1>
        <label htmlFor="email">Email</label> 
        <input type="email" placeholder='Enter email' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter password' />
        <button><Link className='login_button' to="/products">Login</Link></button>
        <p>Don't have an account <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  )
}

export default Login

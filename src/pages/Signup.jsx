import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/signup.css'

const Signup = () => {
  return (
     < div className='signup_container'>
      
      <div className='signup'>
        <h1>Signup</h1>
        <input type="text" placeholder='Full Name' />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Email' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Password' />
        <button><Link className='signup_button' to="/products">Create Account</Link></button>
        <p>Already have an account <Link className='back_button' to="/login">Log in</Link></p>
        
      </div>
    </div>
  )
}

export default Signup
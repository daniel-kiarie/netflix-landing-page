import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li><Link className='one' to='/'>Home</Link></li>
        <li><Link className='one' to='/catalogues'>Catalogues</Link></li>
        <li><Link className='one' to='/login'>Login</Link></li>
        <li><Link className='one' to='/signup'>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Header

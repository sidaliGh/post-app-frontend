import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h3>
        <Link className='menu-home' to='/'> Home </Link>
      </h3>
      <nav>
        <ul className='menu-container'>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/Register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

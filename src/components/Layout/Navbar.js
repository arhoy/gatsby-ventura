import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  )
}

export default Navbar

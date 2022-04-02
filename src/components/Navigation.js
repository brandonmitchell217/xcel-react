import React from 'react'
import '../styles/Navigation.css'
import img from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav>
      <img src={img} alt="X-cel logo" />
      <div className="burger">
        <FaBars />
      </div>
      <ul>
        <li>
          <a href="/">
            <img src={img} alt="X-cel logo" />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Our Services</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

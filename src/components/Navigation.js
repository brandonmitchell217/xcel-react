import React, { useState, useEffect } from 'react'
import '../styles/Navigation.css'
import Logo from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'

const Navigation = () => {
  const [open, setopen] = useState(false)

  useEffect(() => {
    const navList = document.querySelector('ul')
    !open
      ? (navList.style.transform = 'translateY(100%)')
      : (navList.style.transform = 'translateY(0)')
  }, [open])

  return (
    <nav>
      <a href="/">
        <img src={Logo} alt="X-cel logo" />
      </a>
      <div className="burger" onClick={() => setopen(!open)}>
        <FaBars />
      </div>
      <ul>
        <li>
          <a href="/">
            <img src={Logo} alt="X-cel logo" />
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

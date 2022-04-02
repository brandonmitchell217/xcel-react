import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
      </div>
      <img src={Logo} alt="X-cel logo" />
      <span>2022 Copyright</span>
    </footer>
  )
}

export default Footer

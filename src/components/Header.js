import React from 'react'
import '../styles/Header.css'
import Illustration from '../assets/images/illustration.png'

const Header = () => {
  return (
    <header>
      <div className="rightTop">
        <h1>
          All the tools to make for the <span>best decisions</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          quasi dolor magnam.
        </p>
        <div className="ctas">
          <a href="/" className="cta">
            Learn More
          </a>
          <a href="/" className="cta">
            Contact Us
          </a>
        </div>
      </div>
      <div className="leftBottom">
        <img src={Illustration} alt="Tech Illustration" />
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import '../styles/Suscribe.css'
import Border from '../assets/images/boxCorner.png'

const Suscribe = () => {
  return (
    <div className="suscribe">
      <img src={Border} alt="" />
      <p>
        <span>Suscribe</span>
        to our newsletter:
      </p>
      <input type="text" placeholder="Enter your name..." />
    </div>
  )
}

export default Suscribe

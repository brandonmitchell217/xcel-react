import React, { useState, useEffect } from 'react'
import '../styles/Suscribe.css'
import Border from '../assets/images/boxCorner.png'

const Suscribe = () => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    !isActive
      ? (document.querySelector('button').style.visibility = 'hidden')
      : (document.querySelector('button').style.visibility = 'visible')
  }, [isActive])

  function thing() {
    !isActive ? setActive(true) : setActive(false)
    console.log(isActive)
  }

  return (
    <div className="suscribe">
      <img src={Border} alt="" />
      <p>
        <span>Suscribe</span>
        to our newsletter:
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name..."
          onMouseEnter={() => thing()}
          onMouseLeave={() => thing()}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Suscribe

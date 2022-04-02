import React, { useState, useEffect } from 'react'
import '../styles/Suscribe.css'
import Border from '../assets/images/boxCorner.png'

const Suscribe = () => {
  const [isActive, setActive] = useState(false)
  // const [isFocus, setFocus] = useState(false)

  useEffect(() => {
    !isActive
      ? (document.querySelector('button').style.visibility = 'hidden')
      : (document.querySelector('button').style.visibility = 'visible')
  }, [isActive])

  return (
    <div className="suscribe">
      <img src={Border} alt="Green border graphic" />
      <p>
        <span>Suscribe</span>
        to our newsletter:
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your name..."
          onMouseLeave={() => (!isActive ? setActive(true) : setActive(false))}
          onClick={() => (!isActive ? setActive(true) : setActive(false))}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Suscribe

import React from 'react'
import '../styles/Suscribe.css'
import Border from '../assets/images/boxCorner.png'
import Border1 from '../assets/images/boxCorner.png'

const Suscribe = () => {
  // const [isActive, setActive] = useState(false)

  return (
    <div className="suscribe">
      <img src={Border} alt="Green border graphic" className="top" />
      <p>
        <span>Suscribe</span>
        to our newsletter:
      </p>
      <form>
        <input type="text" placeholder="Enter your name..." />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Submit
        </button>
      </form>
      <img src={Border1} alt="Green border graphic" className="btm" />
    </div>
  )
}

export default Suscribe

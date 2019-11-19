import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default Footer

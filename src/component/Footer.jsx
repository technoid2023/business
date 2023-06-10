import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div className='app-container'>
        <footer>
        <div className="footer-content">
        <p>All rights reserved.&copy; Designed By Technoid Kolkata. {new Date().getFullYear()} </p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
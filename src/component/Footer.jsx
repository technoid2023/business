import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='app-container'>
        <footer>
        <div className="footer-content">
        <p>Copyright &copy; ABC Company All Right Reserve {new Date().getFullYear()} ||Devolped & Designed By  <a href="https://google.com">Technoid_Kolkata</a>  </p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
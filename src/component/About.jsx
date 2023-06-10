import React from 'react'
import Layout from './Layout'
import '../css/about.css'

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="info-container">
          <div className="info">
            <h2 className="info-title">TECHNOID</h2>
            <p className="info-description">Technoid is a leading startup developer company specializing in cutting-edge technology solutions. We combine innovation, expertise, and creativity to deliver exceptional software products and services that empower businesses to thrive in the digital era.</p>
          </div>
          <div className="image-container">
            <img src="assests\ceo.jpg" alt="Company Director" className="director-image" />
          </div>
        </div>

        <hr></hr>
        <div className="social-media">
          <div className="photos">
            <img src="assests/stff1.png" alt="Photo 1" />
            <div className="photo-info">
              <span className="photo-name"><h2>Mike</h2></span>
              <div className="social-icons">

                <img src="https://img.icons8.com/?size=512&id=118497&format=png" alt="Social Media Icon 1" />
                <img src="https://img.icons8.com/?size=512&id=13930&format=png" alt="Social Media Icon 2" />
                <img src="https://img.icons8.com/?size=512&id=13963&format=png" alt="Social Media Icon 3" />
              </div>
            </div>
          </div>
          <div className="photos">
            <img src="assests/stff2.jpg" alt="Photo 1" />
            <div className="photo-info">
              <span className="photo-name"><h2>John</h2></span>
              <div className="social-icons">
                <img src="https://img.icons8.com/?size=512&id=118497&format=png" alt="Social Media Icon 1" />
                <img src="https://img.icons8.com/?size=512&id=13930&format=png" alt="Social Media Icon 2" />
                <img src="https://img.icons8.com/?size=512&id=13963&format=png" alt="Social Media Icon 3" />
              </div>
            </div>
          </div>
          <div className="photos">
            <img src="assests/stff3.png" alt="Photo 1" />
            <div className="photo-info">
              <span className="photo-name"><h2>Grim</h2></span>
              <div className="social-icons">
                <img src="https://img.icons8.com/?size=512&id=118497&format=png" alt="Social Media Icon 1" />
                <img src="https://img.icons8.com/?size=512&id=13930&format=png" alt="Social Media Icon 2" />
                <img src="https://img.icons8.com/?size=512&id=13963&format=png" alt="Social Media Icon 3" />
              </div>
            </div>
          </div>
          
         
        </div>

      </div>
    </Layout>
  )
}

export default About
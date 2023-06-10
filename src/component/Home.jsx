import React, { useEffect } from 'react'
import Layout from './Layout'
import '../css/home.css'

const Home = () => {
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
useEffect(() => {
  showSlides()
},[])

  return (
    <Layout >
      <div className='homemain'>
       
          <div className="mid-head">
            <h1 className="wordart">ABC Company</h1>
            <p style={{ color: "black", fontSize: 20 }}>
              <b>Welcome to tech world</b>
            </p>
          </div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                src="assests\home1.jpg"
                style={{ width: "100%", height: "30%" }} alt='photo2'
              />
            </div>
            <div className="mySlides fade">
              <img
                src="assests\service2.jpg"
                style={{ width: "100%", height: "30%" }} alt='photo1'
              />
            </div>
            <div className="mySlides fade">
              <img
                src="assests\company3.jpg"
                style={{ width: "100%", height: "30%" }} alt='photo3'
              />
            </div>
            <button type="button" className="btn-float-right" onClick={() => { document.location.assign('/quote') }}>
              Get Quote
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        
        {/* carousel container ended */}
        {/* box containers started */}
        <div
          className="second"
          data-spy="scroll"
          data-target=".navbar"
          data-offset={50}
        >
          <div id="section1" className="container-fluid">
            <h1 style={{ fontSize: 20, marginTop: 2 }}>
              Images Of Services With Clients
            </h1>
            <div id="slider">
              <figure>
                <img src="assests\service1.jpg" alt="" />
                <img src="assests\service2.jpg" alt="" />
                <img src="assests\service3.jpg" alt="" />
                <img src="assests\service3.jpg" alt="" />
              </figure>
            </div>
          </div>
          <div id="section2" className="container-fluid">
            <h1 style={{ fontSize: 20, marginTop: 2 }}>Company Images</h1>
            <div id="slider">
              <figure>
                <img src="assests\company1.jpg" alt="" />
                <img src="assests\company2.jpg" alt="" />
                <img src="assests\company2.jpg" alt="" />
                <img src="assests\company3.jpg" alt="" />
              </figure>
            </div>
          </div>
          <div id="section3" className="container-fluid">
            <h1 style={{ fontSize: 17, marginTop: 2 }}>
              Awarded and Certification Of company
            </h1>
            <div id="slider">
              <figure>
                <img src="assests\crt1.jpg" alt="" />
                <img src="assests\crt2.jpg" alt="" />
                <img src="assests\crt1.jpg" alt="" />
                <img src="assests\crt2.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
        {/* box containers ended */}
        <div className="social">
          <div className="logo-container-track">
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
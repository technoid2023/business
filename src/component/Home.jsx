import React from 'react'
import Layout from './Layout'
import '../css/home.css'

import { GiAutoRepair } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";
const Home = () => {
// let slideIndex = 0;

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }
// useEffect(() => {
//   showSlides()
// },[])

  return (
    <Layout >
      <div className='homemain'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assests/service2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <button className='btn btn-danger' onClick={() => { document.location.assign('/quote') }}>Get Quote</button>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assests/home1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <button className='btn btn-warning' onClick={() => { document.location.assign('/quote') }}>Get Quote</button>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assests/company3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <button className='btn btn-info' onClick={() => { document.location.assign('/quote') }}>Get Quote</button>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


        {/* carousel container ended */}
        {/* box containers started */}
        <div className='thirdsection'>
        <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><FaRegThumbsUp size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><GiAutoRepair size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><TbTruckDelivery size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
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
            <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
                alt=""
              />
            </div> <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
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
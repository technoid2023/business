import React from 'react'
import Layout from './Layout'
import '../css/home.css'

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

        <div className="mid-head">

          <p style={{ color: "black", fontSize: 20 }}>
            <b>Welcome to tech world</b>
          </p>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assests/service2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assests/home1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="assests/company3.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <button type="button" className="btn-float-right" onClick={() => { document.location.assign('/contact') }}>
          Get Quote
        </button>

        {/* carousel container ended */}
        {/* box containers started */}
        <div className='thirdsection'>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://i0.wp.com/www.iedunote.com/img/23559/what-is-a-company-scaled.jpg" className="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://i0.wp.com/www.iedunote.com/img/23559/what-is-a-company-scaled.jpg" className="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="https://i0.wp.com/www.iedunote.com/img/23559/what-is-a-company-scaled.jpg" className="card-img-top" alt="..."/>
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
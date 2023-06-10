import React from 'react'
import Layout from './Layout'
import '../css/contactus.css'
import {Link} from 'react-router-dom'

const Contactus = () => {
  return (
    <Layout className="conmain">
      <h1 className="section-header">Contact Us</h1>
      <section id="contact">
        <div className="contact-wrapper">
          <div className="social">
            <form id="contact-form" className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    defaultValue=""
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    placeholder="MOBILE NO."
                    name="mobile"
                    defaultValue=""
                    required=""
                  />
                </div>
              </div>
              <textarea
                className="form-control"
                rows={10}
                placeholder="MESSAGE"
                name="message"
                required=""
                defaultValue={""}
              />
              <button
                className="btn btn-primary send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" />
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>
          {/* Left contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">
                    <a href="https://goo.gl/maps/1g2qMpPGssuAjaKT8">City, State</a>{" "}
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (91) 9999999999
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      technoid.kolkata@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <Link to="#" target="" className="contact-icon">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                  <i className="fa fa-google" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Contactus



{/* <div className='social'>
            <Link><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/></Link>
            <Link to='#'><img src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png"/></Link>
            <Link to='#'><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"/></Link>
            <Link to='#'><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"/></Link>

          </div> */}
import React, { useState } from 'react';
import Layout from './Layout';
import { Modal } from "react-bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Product = () => {
  AOS.init({

  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <Layout >
      <div className='container' style={{ display: 'flex', backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '10%', marginBottom: '10%' }}>
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"

        >
          <div onClick={handleShow} >
            <h2>name</h2>
            <img
              src='assests/pr4.jpg'
              className="img-fluid"
              style={{ height: "200px", width: "200px" }}
              alt='...'
            />
          </div>

          <div className="flex-container">
            <div className="m-1 w-100">
              <h4 className="mt-1">
                Price: <i className="fa fa-inr"></i> 500.00
              </h4>
            </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* <img src='assests/pr5.jpg' className="img-fluid" style={{ height: '300px' }} alt='...'/> */}
              <p>description of the product</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleClose}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"

        >
          <div onClick={handleShow}>
            <h2>name</h2>
            <img
              src='assests/pr1.jpg'
              className="img-fluid"
              style={{ height: "200px", width: "200px" }}
              alt='...'
            />
          </div>

          <div className="flex-container">
            <div className="m-1 w-100">
              <h4 className="mt-1">
                Price: <i className="fa fa-inr"></i> 400.00
              </h4>
            </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* <img src='assests/pr3.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' /> */}
              <p>Description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleClose}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: '' }}
        >
          <div onClick={handleShow}>
            <h2>name</h2>
            <img
              src='assests/pr1.jpg'
              className="img-fluid"
              style={{ height: "200px", width: "200px" }}
              alt='...'
            />
          </div>

          <div className="flex-container">
            <div className="m-1 w-100">
              <h4 className="mt-1">
               Price: <i className="fa fa-inr"></i> 700.00
              </h4>
            </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* <img src='assests/pr3.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' /> */}
              <p>description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleClose}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"

        >
          <div onClick={handleShow}>
            <h2>name</h2>
            <img
              src='assests/pr2.jpg'
              className="img-fluid"
              style={{ height: "200px", width: "200px" }}
              alt='...'
            />
          </div>

          <div className="flex-container">
            <div className="m-1 w-100">
              <h4 className="mt-1">
                Price: <i className="fa fa-inr"></i> 900.00
              </h4>
            </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* <img src='assests/pr2.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' /> */}
              <p>description</p>
            </Modal.Body>


            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleClose}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

    </Layout>
  )
}

export default Product
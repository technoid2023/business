import React, { useState } from 'react';
import Layout from './Layout';
import { Modal } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
  AOS.init();

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);
  const handleCloseModal4 = () => setShowModal4(false);
  const handleShowModal4 = () => setShowModal4(true);

  return (
    <Layout>
      <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '10%', marginBottom: '10%' }}>
        {/* Product 1 */}
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"
        >
          <div onClick={handleShowModal1}>
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
              <h3 className="mt-1">
                Rs/-
              </h3>
            </div>
          </div>

          <Modal show={showModal1} onHide={handleCloseModal1}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src='assests/pr5.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' />
              <p>description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleCloseModal1}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Product 2 */}
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"
        >
          <div onClick={handleShowModal2}>
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
              <h3 className="mt-1">
                Rs/-
              </h3>
            </div>
          </div>

          <Modal show={showModal2} onHide={handleCloseModal2}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src='assests/pr3.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' />
              <p>description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleCloseModal2}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Product 3 */}
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: '' }}
        >
          <div onClick={handleShowModal3}>
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
              <h3 className="mt-1">
                Rs/-
              </h3>
            </div>
          </div>

          <Modal show={showModal3} onHide={handleCloseModal3}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src='assests/pr3.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' />
              <p>description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleCloseModal3}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Product 4 */}
        <div
          data-aos='zoom-in'
          className="shadow-lg p-3 mb-5 bg-white rounded"
        >
          <div onClick={handleShowModal4}>
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
              <h3 className="mt-1">
                Rs/-
              </h3>
            </div>
          </div>

          <Modal show={showModal4} onHide={handleCloseModal4}>
            <Modal.Header closeButton>
              <Modal.Title>name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img src='assests/pr2.jpg' className="img-fluid" style={{ height: '300px' }} alt='...' />
              <p>description</p>
            </Modal.Body>

            <Modal.Footer>
              <button className="btn btn-danger" onClick={handleCloseModal4}>
                CLOSE
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

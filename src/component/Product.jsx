import React, { useState } from 'react';
import Layout from './Layout';

import '../css/product.css';


const Product = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
   const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const images = [
    'assests/pr1.jpg',
    'assests/pr2.jpg'
  ];
  const images1 = [
    'assests/pr3.jpg'
  ]
  const images2 = [
      'assests/pr4.jpg',
      'assests/pr5.jpg'
    ]; 
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage1 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  };
  
  const goToPrevImage1 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
  };

  const goToNextImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };
  
  const goToPrevImage2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
  };

  return (
    <Layout>
      <div className='product-container'>
      <div className="product-card">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images[currentImageIndex]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card1">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage1}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images1[currentImageIndex1]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage1}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info1">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card2">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage2}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images2[currentImageIndex2]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage2}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info2">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images[currentImageIndex]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card1">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage1}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images1[currentImageIndex1]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage1}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info1">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card2">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage2}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images2[currentImageIndex2]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage2}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info2">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      <div className="product-card2">
        <div className="image-slider">
          <button className="slider-button prev" onClick={goToPrevImage2}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <img src={images2[currentImageIndex2]} alt="photo1" className="product-image" />
          <button className="slider-button next" onClick={goToNextImage2}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="product-info2">
          <h2>Product Title</h2>
          <h3>Brand</h3>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Product
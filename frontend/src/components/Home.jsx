import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import product1 from '../assets/product1.webp';
import product2 from '../assets/product2.webp';
import product3 from '../assets/product3.webp';
import product4 from '../assets/product4.webp';
import product5 from '../assets/product5.webp';
import product6 from '../assets/product6.webp';

import './Home.css';

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('http://13.54.254.238:5000/names');
    setUserName(response.data);
  }

  return (
    <div className="page-wrapper">
      <header>
        <div className="header-container">
          <a href="/" className="logo">My Shop</a>
          <div className="nav-container">
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            <div className="customer-actions">
              <a href="#" className="btn btn-primary">Hello {userName}</a>
              <a href="#" className="btn btn-outline">Customer Service</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="main-container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            <div className="product">
              <div className="product-image">
                <img src={product1} alt="Product 1" />
              </div>
              <div className="product-info">
                <h3 className="product-name">T-Shirt</h3>
                <p className="product-price">150,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option active">S</span>
                  <span className="size-option">M</span>
                  <span className="size-option">L</span>
                  <span className="size-option">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#000'}}></span>
                  <span className="color-option" style={{backgroundColor: '#fff'}}></span>
                  <span className="color-option" style={{backgroundColor: '#6e7174'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            
            <div className="product">
              <div className="product-image">
                <img src={product2} alt="Product 2" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Long Sleeve Shirt</h3>
                <p className="product-price">250,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option">S</span>
                  <span className="size-option active">M</span>
                  <span className="size-option">L</span>
                  <span className="size-option">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#000'}}></span>
                  <span className="color-option" style={{backgroundColor: '#2f5acf'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src={product3} alt="Product 3" />
              </div>
              <div className="product-info">
                <h3 className="product-name">T-Shirt</h3>
                <p className="product-price">300,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option">S</span>
                  <span className="size-option">M</span>
                  <span className="size-option active">L</span>
                  <span className="size-option">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#000'}}></span>
                  <span className="color-option" style={{backgroundColor: '#fff'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src={product4} alt="Product 4" />
              </div>
              <div className="product-info">
                <h3 className="product-name">T-Shirt</h3>
                <p className="product-price">199,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option">S</span>
                  <span className="size-option active">M</span>
                  <span className="size-option">L</span>
                  <span className="size-option">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#2f5acf'}}></span>
                  <span className="color-option" style={{backgroundColor: '#6e7174'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src={product5} alt="Product 5" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Jacket</h3>
                <p className="product-price">299,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option">S</span>
                  <span className="size-option">M</span>
                  <span className="size-option active">L</span>
                  <span className="size-option">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#000'}}></span>
                  <span className="color-option" style={{backgroundColor: '#2f5acf'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-image">
                <img src={product6} alt="Product 6" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Puffer Jacket</h3>
                <p className="product-price">399,000 VND</p>
                <div className="product-sizes">
                  <span className="size-option">S</span>
                  <span className="size-option">M</span>
                  <span className="size-option">L</span>
                  <span className="size-option active">XL</span>
                </div>
                <div className="product-colors">
                  <span className="color-option active" style={{backgroundColor: '#000'}}></span>
                  <span className="color-option" style={{backgroundColor: '#6e7174'}}></span>
                </div>
                <div className="product-actions">
                  <button className="btn-add-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>We are an online fashion store specializing in providing high-quality products at affordable prices.</p>
            </div>
            <div className="footer-section">
              <h3>Customer Service</h3>
              <p>Contact us 24/7 for any questions or concerns about our products and services.</p>
            </div>
            <div className="footer-section">
              <h3>Shopping Guide</h3>
              <p>Find size guides, shipping information, and return policies to make your shopping experience better.</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Fashion Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
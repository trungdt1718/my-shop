import React, { useState, useEffect } from 'react';
import './Home.css';

const API_URL = 'http://localhost:5000';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log('Fetched products:', data); // Debug log
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error:', err); // Debug log
      setError(err.message);
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="page-wrapper">
        <main>
          <div className="main-container">
            <div className="loading">Loading products...</div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-wrapper">
        <main>
          <div className="main-container">
            <div className="error">Error: {error}</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <header>
        <div className="header-container">
          <a href="/" className="logo">My Shop</a>
          <div className="nav-container">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <div className="customer-actions">
              <a href="#" className="btn btn-primary">Customer Service</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="main-container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product">
                  <img
                    src={`${API_URL}${product.imageUrl}`}
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{formatPrice(product.price)}</p>
                    <div className="product-sizes">
                      {(typeof product.sizes === 'string' ? JSON.parse(product.sizes) : product.sizes || []).map((size, index) => (
                        <span key={index} className="size-option">
                          {size}
                        </span>
                      ))}
                    </div>
                    <div className="product-colors">
                      {(typeof product.colors === 'string' ? JSON.parse(product.colors) : product.colors || []).map((color, index) => (
                        <span
                          key={index}
                          className="color-option"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></span>
                      ))}
                    </div>
                    <div className="product-actions">
                      <button className="btn-add-cart">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>No products available</h3>
              </div>
            )}
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
            <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
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
    <div>
      <header>
        <div class="logo">My Shop</div>
        <nav>
          <div class="customer-login">
            <a href="#" class="login">Hello {userName}</a>
            <a href="#" class="customer-service">Trung tâm CSKH</a>
          </div>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Sản phẩm nổi bật</h2>
          <div className="product-grid">
            <div className="product">
              <img src={product1} alt="Sản phẩm 1" />
              <h3>Áo thun</h3>
              <p>Giá: 150.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product2} alt="Sản phẩm 2" />
              <h3>Áo dài tay</h3>
              <p>Giá: 250.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product3} alt="Sản phẩm 3" />
              <h3>Áo thun</h3>
              <p>Giá: 300.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product4} alt="Sản phẩm 4" />
              <h3>Áo thun</h3>
              <p>Giá: 199.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product5} alt="Sản phẩm 4" />
              <h3>Áo khoác</h3>
              <p>Giá: 299.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product6} alt="Sản phẩm 4" />
              <h3>Áo phao</h3>
              <p>Giá: 399.000 VNĐ</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section>
          <h2>Về chúng tôi</h2>
          <p>
            Chúng tôi là một cửa hàng thời trang trực tuyến chuyên cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.
          </p>
        </section>
        <p>&copy; {new Date().getFullYear()} Cửa hàng Thời trang</p>
      </footer>
    </div>
  );
};

export default Home;
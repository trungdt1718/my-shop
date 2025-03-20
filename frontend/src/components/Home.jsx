import React from 'react';
import product1 from '../assets/product1.webp';
import product2 from '../assets/product2.webp';
import product3 from '../assets/product3.webp';
import product4 from '../assets/product4.webp';

import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <div className="header-content">
          <h1>My Shop</h1>
          <div className="greeting">Hello Trung</div>
        </div>
        <nav>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
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
              <h3>Quần jeans</h3>
              <p>Giá: 250.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product3} alt="Sản phẩm 3" />
              <h3>Váy</h3>
              <p>Giá: 300.000 VNĐ</p>
            </div>
            <div className="product">
              <img src={product4} alt="Sản phẩm 4" />
              <h3>Váy</h3>
              <p>Giá: 300.000 VNĐ</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Về chúng tôi</h2>
          <p>
            Chúng tôi là một cửa hàng thời trang trực tuyến chuyên cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Cửa hàng Thời trang</p>
      </footer>
    </div>
  );
};

export default Home;
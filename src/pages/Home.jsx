import React from 'react'
import './Homepage.css';

const Home = () => {
  return (
  
  <div>
   
       <img src="/image/back7.png" alt="Homepage" style={{ width: "100%", height: "600px" }}   />
       {/* <img src="/images/Home.jpg" alt="Homepage" style={{ width: "1000px", height: "auto" }}   /> */}
<section className="hero">
        <div className="hero-content">
          <h1>Delicious Food Delivered to Your Door</h1>
          <p>Explore our wide range of dishes and enjoy the best food experience from the comfort of your home.</p>
          <button className="cta-button">Order Now</button>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="menu" id="menu">
        <h2>Our Special Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="/image/pizza.jpg" alt="Dish 1" />
            <h3>Pizza</h3>
            <p>A tasty pizza with fresh toppings.</p>
            <p><strong>$15.99</strong></p>
          </div>
          <div className="menu-item">
            <img src="/image/burger2.jpg" alt="Dish 2" />
            <h3>Burger</h3>
            <p>A juicy burger with crispy fries.</p>
            <p><strong>$9.99</strong></p>
          </div>
          <div className="menu-item">
            <img src="/image/pasta.jpg" alt="Dish 3" />
            <h3>Pasta</h3>
            <p>Fresh pasta with a rich tomato sauce.</p>
            <p><strong>$12.99</strong></p>
          </div>
        </div>
      </section>
       {/* Footer */}
       <footer className="footer" id="contact">
        <div className="footer-content">
          <p>&copy; 2025 Foodie. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>

  )
}
export default Home
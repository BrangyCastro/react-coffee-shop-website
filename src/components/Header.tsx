import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="../images/logo.png" alt="" />
      </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </nav>
      <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
      </div>
      <div className="search-form">
        <input type="search" id="search-box" placeholder="Search here" />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      <div className="cart-items-container">
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="images/cart-item-1.png" alt="" />
          <div className="content">
            <h3>cart item 01</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="images/cart-item-2.png" alt="" />
          <div className="content">
            <h3>cart item 02</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="images/cart-item-3.png" alt="" />
          <div className="content">
            <h3>cart item 03</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="images/cart-item-4.png" alt="" />
          <div className="content">
            <h3>cart item 04</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

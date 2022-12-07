import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            ea omnis sapiente soluta perspiciatis, quo necessitatibus impedit
            quaerat aut recusandae, saepe fugiat obcaecati quae, dolorem
            officiis tempore eaque delectus veniam.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorem asperiores incidunt consequatur. Veniam reiciendis sequi,
            itaque quod assumenda nulla est velit inventore sunt iure aliquid,
            neque odio dolor beatae!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Salvatore's</span>
          <span className="copyright">
            ©️ Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

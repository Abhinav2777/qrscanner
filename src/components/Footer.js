import React from "react";
import "./Footer.css";
import img from "./assets/logo.png";
import img2 from "./assets/logo2.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={img} alt="Logo" />
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="company">Company</a>
            </li>
            <li>
              <a href="products">Products</a>
            </li>
            <li>
              <a href="get-quote">Get Quote</a>
            </li>
          </ul>
        </div>
        <div className="footer-office">
          <h4>Corporate Office</h4>
          <p>
            6-3-648/1&2, Off Rajbhavan Road, <br />
            Somajiguda, Hyderabad, Telangana, <br />
            India. - 500082
          </p>
          <p>Phone: 040-6761-7877</p>
          <p>Fax: 040-2332-3347</p>
          <p>Email: websales@tomoegawaindia.com</p>
        </div>
        <div>
          <img src={img2} alt="Logo2" className="footer-img2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

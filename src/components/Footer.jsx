import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>How can we get in touch?</h2>
      <div className="footer-input">
        <div className="main-input">
          <img src="./images/user.png" alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="main-input">
          <img src="./images/email.png" alt="" />
          <input type="Email" placeholder="Email" />
        </div>
      </div>

      <button>Submit</button>
      <h3>Thank You!</h3>
      <p>Let’s Get In Touch</p>
      <img src="./images/image 7.png" alt="" className="icons" />
      <button>Retake</button>

      <div className="footer-bottom">
        <h4>This calculator is powered by Outgrow.co</h4>
        <img src="./images/image 13.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;

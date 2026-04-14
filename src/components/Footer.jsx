import React from "react";
import logo from "../assets/eGov-Foundation.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row text-center text-md-start mb-4">
            
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img src={logo} alt="Logo" height="40" />

              <p className="my-3">
                Catalyzing digital transformation in public service delivery.
              </p>

              <div className="social-icons mt-3">
                <a href="#" className="social-btn me-3">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="#" className="social-btn me-3">
                  <i className="bi bi-twitter-x fs-4"></i>
                </a>
                <a href="#" className="social-btn me-3">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="#" className="social-btn">
                  <i className="bi bi-youtube fs-4"></i>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <h5 className="fw-semibold mb-3">Useful Links</h5>

              <div className="row">
                <div className="col-6">
                  <a href="#" className="footer-link d-block mb-2">Home</a>
                  <a href="#" className="footer-link d-block mb-2">Our Impact</a>
                  <a href="#" className="footer-link d-block mb-2">DIGIT Sandbox</a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-link d-block mb-2">Our People</a>
                  <a href="#" className="footer-link d-block mb-2">Financials</a>
                  <a href="#" className="footer-link d-block mb-2">Contact Us</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <h5 className="fw-semibold mb-3">Subscribe Now</h5>
              <p>
                Receive regular updates of our monthly newsletter DOT – in your inbox.
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div className="copyright-bar">
        <div className="container text-center">
          <p className="mb-0">© 2026 eGov. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
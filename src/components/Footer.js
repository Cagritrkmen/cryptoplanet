import React from 'react';

const Footer = () => (
  <footer className="bg-white border-top pt-5" style={{ fontFamily: 'DM Sans, Arial, sans-serif', color: '#23262F' }}>
    <div className="container">
      <div className="row pb-4 d-flex justify-content-between">
        {/* Left: Logo & Contact */}
        <div className="col-lg-3 mb-4 mb-lg-0 d-flex flex-column gap-2 ">
          <div className="d-flex  mb-3">
          <div className="me-2 d-flex  justify-content-center align-items-center">
              <img src="/logo.png" alt="logo" style={{ width: '32px', height: '32px' }} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 32, letterSpacing: '-1%' }}>Rocket</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 24 }}>Let's talk! 🤙</span>
          <span style={{ fontSize: 16 }}>Sinahosseini379@gmail.com</span>
          <span style={{ fontSize: 16 }}>+98 902 353 2926</span>
          <span style={{ fontSize: 16 }}>Copyright © 2022 Free For World People</span>
        </div>
        {/* Products */}
        <div className="col-lg-2 mb-4 mb-lg-0">
          <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 14, letterSpacing: '0.05em' }}>Products</div>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="text-decoration-none text-secondary">Spot</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Inverse Perpetual</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">USDT Perpetual</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Exchange</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Launchpad</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Binance Pay</a></li>
          </ul>
        </div>
        {/* Services */}
        <div className="col-lg-2 mb-4 mb-lg-0">
          <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 14, letterSpacing: '0.05em' }}>Services</div>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="text-decoration-none text-secondary">Buy Crypto</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Markets</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Tranding Fee</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Affiliate Program</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Referral Program</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">API</a></li>
          </ul>
        </div>
        {/* Support */}
        <div className="col-lg-2 mb-4 mb-lg-0">
          <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 14, letterSpacing: '0.05em' }}>Support</div>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="text-decoration-none text-secondary">Bybit Learn</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">User Feedback</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Submit a request</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">API Documentation</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Trading Rules</a></li>
          </ul>
        </div>
        {/* About Us */}
        <div className="col-lg-2 mb-4 mb-lg-0">
          <div className="fw-bold text-uppercase mb-2" style={{ fontSize: 14, letterSpacing: '0.05em' }}>About Us</div>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="text-decoration-none text-secondary">About Bybit</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Authenticity Check</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Business Contacts</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
          </ul>
        </div>
        
      </div>
    </div>
    <div className="bg-light py-3 mt-3 border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <span style={{ fontSize: 16, color: '#23262F' }}>
            Copyright © 2023  Free For Earth's people
          </span>
        </div>
        <div className="d-flex gap-4">
          <a href="#" className="text-secondary" style={{ fontSize: 16 }}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-secondary" style={{ fontSize: 16 }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-secondary" style={{ fontSize: 16 }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-secondary" style={{ fontSize: 16 }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 
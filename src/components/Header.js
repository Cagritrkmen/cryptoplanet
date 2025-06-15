"use client";
import React from 'react';
import Link from "next/link";
import logo from "../../public/logo.png";
import { usePathname } from 'next/navigation';
import '../styles/header-nav.scss';

const Header = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-4" style={{ height: '50px' }}>
      <div className="container-fluid p-0">
        <div className="d-flex align-items-center justify-content-between w-100">
          
          {/* Left group: Logo + Navigation */}
          <div className="d-flex align-items-center gap-4">
            {/* Logo */}
            <Link href="/" className="navbar-brand d-flex align-items-center fw-bold m-0" style={{ fontSize: '24px', fontFamily: 'DM Sans, Arial, sans-serif', color: '#black' }}>
              <div className="me-2 d-flex align-items-center justify-content-center">
                <img src="/logo.png" alt="logo" style={{ width: '32px', height: '32px' }} />
              </div>
              Rocket
            </Link>

            {/* Navigation Menu */}
            <ul className="navbar-nav d-flex flex-row align-items-center gap-4 m-0">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle px-3 fw-medium fs-6 ${isActive('/') ? 'active bg-primary text-white no-radius full-height' : ''}`}
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={!isActive('/') ? { color: '#23262F' } : {}}
                >
                  Homepage
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/">Home 1</Link></li>
                  <li><Link className="dropdown-item" href="/home2">Home 2</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link px-0 fw-medium ${isActive('/buy') ? 'active bg-primary text-white no-radius full-height px-3' : ''}`}
                  href="/buy"
                  style={!isActive('/buy') ? { color: '#23262F' } : {}}
                >
                  Buy Crypto
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link px-0 fw-medium ${isActive('/markets') ? 'active bg-primary text-white no-radius full-height px-3' : ''}`}
                  href="/markets"
                  style={!isActive('/markets') ? { color: '#23262F' } : {}}
                >
                  Markets
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link px-0 fw-medium ${isActive('/exchange') ? 'active bg-primary text-white no-radius full-height px-3' : ''}`}
                  href="/exchange"
                  style={!isActive('/exchange') ? { color: '#23262F' } : {}}
                >
                  Exchange
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link px-0 fw-medium ${isActive('/spot') ? 'active bg-primary text-white no-radius full-height px-3' : ''}`}
                  href="/spot"
                  style={!isActive('/spot') ? { color: '#23262F' } : {}}
                >
                  Spot
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link d-flex align-items-center px-0 fw-medium ${isActive('/markets/BITUSDT') ? 'active bg-primary text-white no-radius full-height px-3' : ''}`}
                  href="/markets/BITUSDT"
                  style={!isActive('/markets/BITUSDT') ? { color: '#23262F' } : {}}
                >
                  BITUSDT
                  <span className="ms-1" style={{ color: '#3772FF', fontSize: '12px' }}>●</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle px-0" href="#" role="button" data-bs-toggle="dropdown" 
                   style={{ color: '#23262F', fontSize: '14px', fontWeight: '500' }}>
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/page1">Page 1</Link></li>
                  <li><Link className="dropdown-item" href="/page2">Page 2</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Right group: User Controls */}
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <a className="nav-link dropdown-toggle px-0" href="#" data-bs-toggle="dropdown" 
                 style={{ color: '#777E90', fontSize: '14px', fontWeight: '500' }}>
                Assets
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">My Assets</a></li>
              </ul>
            </div>
            
            <div className="dropdown">
              <a className="nav-link dropdown-toggle px-0" href="#" data-bs-toggle="dropdown" 
                 style={{ color: '#777E90', fontSize: '14px', fontWeight: '500' }}>
                Orders & Trades
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">My Orders</a></li>
              </ul>
            </div>
            
            <div className="dropdown">
              <a className="nav-link dropdown-toggle px-0" href="#" data-bs-toggle="dropdown" 
                 style={{ color: '#777E90', fontSize: '14px', fontWeight: '500' }}>
                EN/USD
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">EN/USD</a></li>
                <li><a className="dropdown-item" href="#">TR/TRY</a></li>
              </ul>
            </div>
            
            <button className="btn btn-link p-0 border-0" title="Toggle theme" style={{ color: '#777E90' }}>
              <span style={{ fontSize: '18px' }}>☀️</span>
            </button>
            
            <button className="btn btn-link p-0 border-0 position-relative" title="Notifications" style={{ color: '#777E90' }}>
              <span style={{ fontSize: '18px' }}>🔔</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    style={{ fontSize: '10px', padding: '2px 6px' }}>3</span>
            </button>
            
            <Link href="/wallet" className={`btn btn-outline-primary rounded-pill px-3 py-1 fw-medium${isActive('/wallet') ? ' active bg-primary text-white border-0' : ''}`} style={{ fontSize: '14px', height: '32px' }}>
              Wallet
            </Link>
            
            <div className="rounded-circle d-flex align-items-center justify-content-center" 
                 style={{ width: '32px', height: '32px', background: '#F4F5F6' }}>
              <span style={{ fontSize: '16px' }}>👤</span>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Header; 
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportedCoinsAsync } from "../store/coinSlice";
import Link from "next/link";
import CryptoPricesStrip from "@/components/CryptoPricesStrip";
import CoinTableRow from "../components/CoinTableRow";

export default function Home() {
  const dispatch = useDispatch();
  const { coins, status, error } = useSelector((state) => state.coins);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSupportedCoinsAsync({ per_page: 250, sparkline: true }));
    }
  }, [dispatch, status]);

  return (
    <main>
      {/* Hero Section */}
      <section className="position-relative bg-light py-4" style={{ minHeight: 550 }}>
        <div className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold" style={{ fontSize: 64, lineHeight: 1.1 }}>
              Buy & Sell Digital Assets In The Rocket
            </h1>
            <p className="text-secondary fs-5 mb-4">
              Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
            </p>
            <Link href="/register" className="btn btn-primary btn-lg rounded-pill px-4 my-4" style={{ background: '#3772FF', border: 0 }}>
              Get started now
            </Link>
            <h5 className="py-4 fw-bold">
              Our Partners
            </h5>
            <img  src="/images/group.png" alt="partners" className="img-fluid " />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src="/images/hero-bg.png" alt="hero" className="img-fluid pb-5" />
          </div>
        </div>
        
      </section>
      {/* Today's Crypto Overlap */}
      <CryptoPricesStrip overlap />

      {/* Market Update (Modern Bootstrap Table) */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold fs-1 mb-0">Market Update</h2>
            <Link href="/markets" className="btn btn-outline-primary rounded-pill px-4 fw-semibold" style={{ fontSize: 18 }}>
              See All Coins
            </Link>
          </div>
          <div className="bg-white rounded-4  p-3">
            <div className="table-responsive">
              <table className="table align-middle table-hover mb-0" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead className="bg-white">
                  <tr style={{ fontSize: 16, fontWeight: 700, color: '#777E90' }}>
                    <th className="py-3 ps-4 text-secondary" style={{ borderTopLeftRadius: 16 }}>#</th>
                    <th className="py-3 text-secondary">Name</th>
                    <th className="py-3 text-secondary">Last Price</th>
                    <th className="py-3 text-secondary">24h %</th>
                    <th className="py-3 text-secondary">Market Cap</th>
                    <th className="py-3 text-secondary">Last 7 Days</th>
                    <th className="py-3 pe-4 text-secondary" style={{ borderTopRightRadius: 16 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {status === "loading" ? (
                    <tr><td colSpan={7} className="text-center py-5">Loading...</td></tr>
                  ) : status === "failed" ? (
                    <tr><td colSpan={7} className="text-danger text-center py-5">{error}</td></tr>
                  ) : (
                    coins.slice(0, 8).map((coin, i) => (
                      <CoinTableRow key={coin.id} coin={coin} index={i} showSparkline />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5" style={{ background: '#F7F7F7' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ fontFamily: 'DM Sans', fontWeight: 700, fontSize: 48, color: '#23262F', letterSpacing: '-2%' }}>
              How It Work
            </h2>
            <p className="mx-auto" style={{ maxWidth: 544, fontFamily: 'DM Sans', fontWeight: 400, fontSize: 20, color: '#777E90', letterSpacing: '-1%' }}>
              Stacks is a production-ready library of stackable content blocks built in React Native.
            </p>
          </div>
          {/* Steps */}
          <div className="d-flex flex-row justify-content-center align-items-start text-center flex-wrap gap-0" style={{ overflowX: 'auto' }}>
            {[
              {
                img: '/images/step1.png',
                step: 'STEP 1',
                title: 'Download',
                desc: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
              },
              {
                img: '/images/step2.png',
                step: 'STEP 2',
                title: 'Connect Wallet',
                desc: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
              },
              {
                img: '/images/step3.png',
                step: 'STEP 3',
                title: 'Start Trading',
                desc: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
              },
              {
                img: '/images/step4.png',
                step: 'STEP 4',
                title: 'Earn Money',
                desc: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.'
              }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div
                  className="d-flex flex-column align-items-center px-2"
                  style={{ minWidth: 180, maxWidth: 260 }}
                >
                  <img src={step.img} alt={step.title} style={{ width: 64, height: 64, marginBottom: 12 }} />
                  <div className="text-uppercase text-secondary mb-1" style={{ fontSize: 13, letterSpacing: 2 }}>{step.step}</div>
                  <div className="fw-bold mb-2" style={{ fontSize: 20 }}>{step.title}</div>
                  <div className="text-secondary" style={{ fontSize: 15 }}>{step.desc}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="d-flex align-items-center" style={{ height: 80 }}>
                    <img className="img-fluid" src="/images/connect-line.png" alt="How it works line" style={{ width: 80, minWidth: 60, maxWidth: 100 }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Rockie */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <img src="/images/about-img.png" alt="About Rockie" className="img-fluid" style={{ maxWidth: 500, boxShadow: '0px 14px 64px -48px rgba(15, 15, 15, 0.1)' }} />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ fontSize: 36, color: '#23262F' }}>What Is Rockie</h2>
              <p className="mb-4 text-secondary" style={{ fontSize: 18 }}>
                Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3" style={{ color: '#3772FF', fontSize: 22, marginTop: 2 }}>&#9679;</span>
                  <div>
                    <span className="fw-bold" style={{ color: '#23262F' }}>View real-time cryptocurrency prices</span>
                    <div className="text-secondary" style={{ fontSize: 15 }}>
                      Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3" style={{ color: '#3772FF', fontSize: 22, marginTop: 2 }}>&#9679;</span>
                  <div>
                    <span className="fw-bold" style={{ color: '#23262F' }}>Buy and sell BTC, ETH, XRP, OKB, Etc...</span>
                    <div className="text-secondary" style={{ fontSize: 15 }}>
                      Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P, Staking, Mining, And Margin.
                    </div>
                  </div>
                </li>
              </ul>
              <Link href="/about" className="btn btn-primary rounded-pill px-4 py-2" style={{ background: '#3772FF', fontWeight: 600, fontSize: 18 }}>
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free your money & Invest with confident (Download App) */}
      <section className="py-5" style={{ background: '#F7F7F7' }}>
        <div className="container">
          <div className="row align-items-center justify-content-between flex-lg-row flex-column-reverse">
            {/* Sol: Yazılar */}
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-lg-start align-items-center mb-5 mb-lg-0">
              <h2 className="fw-bold mb-3 text-lg-start text-center" style={{ fontSize: 48, color: '#23262F', letterSpacing: '-2%' }}>Free Your Money & Invest With Confident</h2>
              <p className="mb-4 text-secondary text-lg-start text-center" style={{ fontSize: 20, fontFamily: 'Lato, DM Sans, Arial, sans-serif' }}>
                With Cryptor Trade, you can be sure your trading skills are matched
              </p>
              <div className="mb-4 w-100" style={{ maxWidth: 480 }}>
                <div className="d-flex align-items-start mb-3">
                  <span className="me-3 mt-1" style={{ color: '#3772FF', fontSize: 22 }}>&#10003;</span>
                  <div>
                    <span className="fw-bold" style={{ fontSize: 22, color: '#23262F' }}>Buy, Sell, And Trade On The Go</span>
                    <div className="text-secondary" style={{ fontSize: 16 }}>
                      Managa your holdings from your mobile decive
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <span className="me-3 mt-1" style={{ color: '#3772FF', fontSize: 22 }}>&#10003;</span>
                  <div>
                    <span className="fw-bold" style={{ fontSize: 22, color: '#23262F' }}>Take Control Of Your Wealth</span>
                    <div className="text-secondary" style={{ fontSize: 16 }}>
                      Rest assured you (and only you) have access to your funds
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 mt-2">
                <img src="/images/playstore.png" alt="Google Play" style={{ height: 48, borderRadius: 8 }} />
                <img src="/images/appstore.png" alt="App Store" style={{ height: 48, borderRadius: 8 }} />
              </div>
            </div>
            {/* Sağ: QR ve balon */}
            <div className="col-lg-6 d-flex flex-column align-items-center position-relative ">
              <img className="img-fluid" src="/images/download-qr.png" alt="Download QR" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (placeholder) */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ fontSize: 32 }}>Testimonials</h2>
          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img src="/images/partner6.png" alt="avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                    <div>
                      <div className="fw-bold">Johnny Andro</div>
                      <div className="text-secondary" style={{ fontSize: 14 }}>Director, Company</div>
                    </div>
                  </div>
                  <p className="mb-0">“Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code, I could easily understand and develop applications with the knowledge gathered during the course.”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (placeholder) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ fontSize: 32 }}>What Is Rockie?</h2>
          <p className="text-secondary mb-4" style={{ fontSize: 20 }}>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
          <Link href="/about" className="btn btn-primary rounded-pill px-4">Explore More</Link>
        </div>
      </section>

      
    </main>
  );
}

// Bootstrap hover efekti için ekstra CSS kaldırıldı, sadece Bootstrap shadow ve border kullanılıyor.

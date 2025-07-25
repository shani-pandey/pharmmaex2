import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './bannerHome.module.css';
import Ticker from './Ticker';

const BannerHome = () => {
  const eventDate = new Date("2025-10-03T17:05:00.000Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown(); // initial call
    const intervalId = setInterval(updateCountdown, 60 * 1000); // update every minute

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <section className={styles.bannerHomeSection}>
      {/* Background Video */}
      <video
        className={styles.bannerVideo}
        src="https://agiledigitaledge.com/ust-pay/phasramex-Videos.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className="container position-relative h-100 z-3">
        <div className="row align-items-center h-100" style={{ minHeight: '80vh' }}>
          {/* Countdown Box */}
          <div className="col-lg-1 col-md-4 mb-4 mb-md-0 countdownBoxArea">
            <div className={styles.countdownBox}>
              <div className="mb-3">
                <div className="fw-bold" style={{ fontSize: '2.2rem', color: '#fff' }}>{timeLeft.days.toLocaleString()}</div>
                <div style={{ fontSize: '1.1rem' }}>Days</div>
              </div>
              <div className="mb-3">
                <div className="fw-bold" style={{ fontSize: '1.7rem', color: '#fff' }}>{timeLeft.hours.toLocaleString()}</div>
                <div style={{ fontSize: '1.1rem' }}>Hours</div>
              </div>
              <div className="d-none d-md-block">
                <div className="fw-bold" style={{ fontSize: '1.3rem', color: '#fff' }}>{timeLeft.minutes.toLocaleString()}</div>
                <div style={{ fontSize: '1.1rem' }}>Minutes</div>
              </div>
            </div>

            <div className="qrBanner">
              <div className={styles.qrBox}>
                <Image
                  src="/assests/img/pharma-qr.jpeg"
                  alt="QR Code"
                  className="img-fluid mb-2"
                  width={120}
                  height={120}
                />
                <div className={styles.textQR}>Scan QR for<br />Free Registration</div>
              </div>
            </div>
          </div>

          {/* Main Banner Content */}
          <div className="col-lg-6 col-md-8 text-start text-white mx-auto">
            <div className="mb-2" style={{ letterSpacing: '0.2em', fontSize: '1.1rem' }}>PHARMMAEX PRESENTING</div>
            <h1 className={`${styles.bannerTitle} fw-bold mb-3`}>
              India&apos;s Largest Platform for Third Party Pharma Manufacturing and PCD Franchise Opportunities.
            </h1>
            <div className={`${styles.bannerSubtitle} mb-3`}>
              03–04 October, 2025 | Bombay Exhibition Centre, Mumbai
            </div>
            <div className={styles.bannerBtnGroup}>
              <a href=" https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx  " className="btn btn-success px-4 py-2">Pre-Registration</a>
              <a href="/exhibitor" className="btn btn-outline-light px-4 py-2 border border-2">Become Exhibitor</a>
            </div>
          </div>

          {/* QR Code Box */}
          <div className="col-lg-3 d-flex flex-column align-items-end justify-content-end d-none d-md-flex">
            <div className={styles.qrBox}>
              <Image
                src="/assests/img/pharma-qr.jpeg"
                alt="QR Code"
                className="img-fluid mb-2"
                width={120}
                height={120}
              />
              <div className={styles.textQR}>Scan QR for<br />Free Registration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <Ticker />
    </section>
  );
};

export default BannerHome;

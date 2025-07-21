import React, { useEffect, useState } from 'react';

const ExhibitionSeries = () => {
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
    <section className="exhibition-series-section py-5">
      <div className="container innerContainer">
        <h2 className="fw-bold text-center mb-5 exhibition-series-title">PharmmaEx Exhibitions Searies</h2>
        {/* Upcoming Exhibition */}
        <div className="mb-5">
          <h5 className="mb-3 exhibition-series-subtitle">Upcoming Exhibition</h5>
          <div className="d-flex flex-wrap align-items-center gap-4">
            <img src="/assests/img/image58.svg" alt="Bombay Exhibition Centre" className="exhibition-series-upcoming-img rounded-4" />
            <div className="d-flex gap-3 align-items-center exhibition-series-countdown">
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: '2rem' }}>
                  {timeLeft.days.toLocaleString()}
                </div>
                <div style={{ fontSize: '1rem' }}>Days</div>
              </div>
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: '2rem' }}>
                  {timeLeft.hours.toLocaleString()}
                </div>
                <div style={{ fontSize: '1rem' }}>Hours</div>
              </div>
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: '2rem' }}>
                  {timeLeft.minutes.toLocaleString()}
                </div>
                <div style={{ fontSize: '1rem' }}>Minutes</div>
              </div>
            </div>
            <div className="ms-3 exhibition-series-upcoming-details">
              <div className="fw-bold">03-04 October, 2025</div>
              <div>Bombay Exhibition Centre, Mumbai</div>
            </div>
            <div className="d-flex gap-2 ms-3 exhibition-series-btn-group">
              <a href=" https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx  " className="exhibition-series-btn">Pre-Registration</a>
              <a href="/exhibitor" className="exhibition-series-btn">Become Exhibitor</a>
            </div>
          </div>
        </div>
        {/* Past Exhibitions */}
        <div>
          <h5 className="mb-3 exhibition-series-subtitle">Past Exhibitions</h5>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="exhibition-series-card rounded-4">
                <img src="/assests/img/image1.webp" alt="Hyderabad" className="img-fluid rounded-4 exhibition-series-card-img" />
                <div className="mt-3 exhibition-series-card-details">
                  <div>02-03 May, 2025<br />HITEX Exhibition Centre,<br/> Hyderabad</div>
                  <a href="/gallery/hyderabad" className="exhibition-series-card-btn mt-2">
                    <span className="me-2">
                        <img src="/assests/img/gaIIcon.svg" />
                        </span>View Gallery
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-3">
              <div className="exhibition-series-card rounded-4">
                <img src="/assests/img/image2.webp" alt="Ahmedabad" className="img-fluid rounded-4 exhibition-series-card-img" />
                <div className="mt-3 exhibition-series-card-details">
                  <div>14-15 December, 2024<br />Vigyan Bhawan, Science City,<br/> Ahmedabad</div>
                  <a href="/gallery/ahmedabad" className="exhibition-series-card-btn mt-2">
                    <span className="me-2">
                        <img src="/assests/img/gaIIcon.svg" />
                        </span>View Gallery
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-3">
              <div className="exhibition-series-card rounded-4">
                <img src="/assests/img/image3.webp" alt="Pune" className="img-fluid rounded-4 exhibition-series-card-img" />
                <div className="mt-3 exhibition-series-card-details">
                  <div>21-22 June, 2024<br />Auto Cluster Exhibition Centre, <br/> Chinchwad-Pune</div>
                  <a href="/gallery/pune" className="exhibition-series-card-btn mt-2">
                    <span className="me-2">
                        <img src="/assests/img/gaIIcon.svg" />
                        </span>View Gallery
                  </a>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-3">
              <div className="exhibition-series-card rounded-4">
                <img src="/assests/img/image5.webp" alt="Bangalore" className="img-fluid rounded-4 exhibition-series-card-img" />
                <div className="mt-3 exhibition-series-card-details">
                  <div>02-03 February, 2024<br />Manpho Convention Centre,<br/> Bangalore</div>
                  <a href="/gallery/banglore" className="exhibition-series-card-btn mt-2">
                    <span className="me-2">
                        <img src="/assests/img/gaIIcon.svg" />
                        </span>View Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSeries; 
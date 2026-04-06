import React from "react";
import styles from "./Phase1.module.css";

const FinalCTA = ({ onBookStall, onBrochure }) => {
  return (
    <section className={styles.finalCtaSection}>
      <div className="container">
        <div className={styles.finalCtaBox}>
          <span className={styles.eyebrowLight}>Limited Stalls Remaining</span>
          <h2 className={styles.finalCtaTitle}>
            Ready to Meet 50,000+ Pharma Buyers?
          </h2>
          <p className={styles.finalCtaSub}>
            Lock in your stall at the next PharmmaEx edition before it sells out. Premium booths get
            booked 90 days in advance.
          </p>
          <div className={styles.finalCtaActions}>
            <button type="button" className={styles.btnPrimaryXl} onClick={onBookStall}>
              Book Your Stall Now
            </button>
            <button type="button" className={styles.btnGhostXl} onClick={onBrochure}>
              Download Brochure
            </button>
          </div>
          <div className={styles.trustRow}>
            <span>✓ 500+ Exhibitors</span>
            <span>✓ 50,000+ Visitors</span>
            <span>✓ 12+ Cities</span>
            <span>✓ 5+ Years</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

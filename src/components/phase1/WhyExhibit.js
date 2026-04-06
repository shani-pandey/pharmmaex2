import React from "react";
import styles from "./Phase1.module.css";

const BENEFITS = [
  {
    icon: "🎯",
    title: "Verified Buyers",
    text: "Meet 50,000+ pre-screened doctors, distributors and franchise owners actively looking to source.",
  },
  {
    icon: "🤝",
    title: "Direct Deals",
    text: "Skip middlemen — close PCD, third-party manufacturing and bulk supply contracts on the spot.",
  },
  {
    icon: "🌐",
    title: "Pan-India Reach",
    text: "Showcase your brand across 12+ cities in a single year with one trusted exhibition partner.",
  },
  {
    icon: "📈",
    title: "Proven ROI",
    text: "Past exhibitors report an average of 100+ qualified leads and 20+ closed deals per event.",
  },
  {
    icon: "🛡️",
    title: "Trusted Brand",
    text: "5+ years organizing India&apos;s most credible pharma franchise expos with premium brand association.",
  },
  {
    icon: "📣",
    title: "360° Marketing",
    text: "Pre-event digital campaigns, on-ground branding and post-event lead reports — included.",
  },
];

const WhyExhibit = ({ onCTA }) => {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.headerCenter}>
          <span className={styles.eyebrow}>Why Exhibit With Us</span>
          <h2 className={styles.sectionTitle}>Built to Grow Your Pharma Business</h2>
          <p className={styles.sectionSub}>
            6 reasons why 500+ pharma brands choose PharmmaEx as their #1 lead-generation channel.
          </p>
        </div>
        <div className={styles.benefitGrid}>
          {BENEFITS.map((b) => (
            <div key={b.title} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{b.icon}</div>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitText} dangerouslySetInnerHTML={{ __html: b.text }} />
            </div>
          ))}
        </div>
        <div className={styles.centerCta}>
          <button type="button" className={styles.btnPrimaryLg} onClick={() => onCTA && onCTA("stall")}>
            Book Your Stall
          </button>
          <button type="button" className={styles.btnGhostLg} onClick={() => onCTA && onCTA("brochure")}>
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;

import React from "react";
import styles from "./Phase1.module.css";

const IMAGES = [
  "/assests/img/gal2024/IMG-001.jpg",
  "/assests/img/gal2024/IMG-002.jpg",
  "/assests/img/gal2024/IMG-003.jpg",
  "/assests/img/gal2024/IMG-004.jpg",
  "/assests/img/gal2024/IMG-005.jpg",
  "/assests/img/gal2024/IMG-007.jpg",
];

const HIGHLIGHTS = [
  { value: "12K+", label: "Footfall in Mumbai" },
  { value: "350+", label: "Brands Showcased" },
  { value: "₹85Cr", label: "Business Generated" },
];

const PastEventHighlights = () => {
  return (
    <section className={styles.pastSection}>
      <div className="container">
        <div className={styles.headerCenter}>
          <span className={styles.eyebrow}>Past Editions</span>
          <h2 className={styles.sectionTitle}>Glimpses of Our Past Events</h2>
          <p className={styles.sectionSub}>
            From Mumbai to Hyderabad — moments from packed halls, signed deals and proud exhibitors.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {IMAGES.map((src, i) => (
            <div key={src} className={`${styles.galleryItem} ${i === 0 ? styles.gallerySpan : ""}`}>
              <img src={src} alt={`PharmmaEx past event ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className={styles.highlightRow}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className={styles.highlightItem}>
              <div className={styles.highlightVal}>{h.value}</div>
              <div className={styles.highlightLabel}>{h.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.centerCta}>
          <a href="/past-exhibitions" className={styles.btnGhostLg}>
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PastEventHighlights;

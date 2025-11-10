import React from "react";
import styles from "./FloatingDownloads.module.css";

export default function FloatingDownloads() {
  return (
    <div className={styles.floatingContainer}>
      <a
        href="/assests/pdf/Coimbotore_layout.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.downloadButton} ${styles.floorplan}`}
      >
        Floor Plan
      </a>
      <a
        href="/assests/pdf/Brochure-coimbatore.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.downloadButton} ${styles.brochure}`}
      >
        Brochure
      </a>
    </div>
  );
}

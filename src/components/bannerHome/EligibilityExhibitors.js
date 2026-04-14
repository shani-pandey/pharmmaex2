import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./EligibilityExhibitors.module.css";

const CATEGORIES = [
  {
    img: "/assests/img/p1.webp",
    title: "Allopathic",
    desc:
      "Modern pharma brands showcasing prescription medicines, OTC, generics and chronic-therapy ranges to franchise buyers.",
    href: "/exhibitor-categories/pcd-pharma-franchise",
  },
  {
    img: "/assests/img/itemimg3.webp",
    title: "Ayurvedic",
    desc:
      "AYUSH-licensed brands presenting classical and proprietary ayurvedic medicines for clinics, pharmacies and PCD partners.",
    href: "/exhibitor-categories/ayurvedic-herbal",
  },
  {
    img: "/assests/img/itemimg5.webp",
    title: "Cosmetic",
    desc:
      "Derma cosmetics, cosmeceuticals and clinical skincare brands sourcing private-label and franchise opportunities.",
    href: "/exhibitor-categories/cosmetics-cosmeceuticals",
  },
  {
    img: "/assests/img/itemimg4.webp",
    title: "Herbal",
    desc:
      "Standardised herbal extracts, wellness formulations and natural product brands for the Indian and export markets.",
    href: "/exhibitor-categories/ayurvedic-herbal",
  },
];

const ArrowRight = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const EligibilityExhibitors = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* ============ Header row ============ */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Who Can Exhibit
            </span>
            <h2 className={styles.title}>
              Built for every pharma{" "}
              <span className={styles.titleAccent}>vertical</span>
            </h2>
            <p className={styles.subtitle}>
              From allopathic prescription brands to ayurvedic, cosmetic and herbal
              specialists — PharmmaEx is the meeting point for every kind of
              pharma exhibitor in India.
            </p>
          </div>

          <Link href="/exhibitor-categories" className={styles.viewAll}>
            View all 8 categories <ArrowRight size={13} />
          </Link>
        </div>

        {/* ============ Card grid ============ */}
        <div className={styles.grid}>
          {CATEGORIES.map((c, idx) => (
            <Link key={c.title} href={c.href} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={c.img}
                  alt={c.title}
                  width={640}
                  height={480}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.body}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardArrow}>
                    <ArrowRight size={15} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityExhibitors;

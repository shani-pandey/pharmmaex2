import React from "react";
import styles from "./Phase1.module.css";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    company: "MediCare Pharma Pvt. Ltd.",
    role: "Director",
    result: "120+ qualified leads in 2 days",
    quote:
      "PharmmaEx delivered the highest quality buyer footfall we've seen at any pharma expo. We closed 18 PCD deals before the event even ended.",
  },
  {
    name: "Dr. Anita Sharma",
    company: "Wellness Biotech",
    role: "Founder",
    result: "₹40L+ orders booked on-spot",
    quote:
      "The visitor profile was perfectly aligned with our target market. Best ROI we've ever had from any trade show in India.",
  },
  {
    name: "Vikram Singh",
    company: "Healwell Remedies",
    role: "Marketing Head",
    result: "9 new state distributors signed",
    quote:
      "Highly organized, premium audience and excellent on-ground support. PharmmaEx is now a permanent fixture in our annual marketing calendar.",
  },
  {
    name: "Suresh Patel",
    company: "AyurPlus Healthcare",
    role: "CEO",
    result: "200+ business cards collected",
    quote:
      "From booth setup to lead reports, every detail was handled professionally. We're booking 3 cities for next year already.",
  },
];

const Star = () => <span className={styles.star}>★</span>;

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.headerCenter}>
          <span className={styles.eyebrow}>Exhibitor Success Stories</span>
          <h2 className={styles.sectionTitle}>Real Results from Real Brands</h2>
          <p className={styles.sectionSub}>
            Don&apos;t just take our word for it — hear from pharma leaders who grew their business at PharmmaEx.
          </p>
        </div>
        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className={styles.testimonialCard}>
              <div className={styles.stars}>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <div className={styles.resultBadge}>{t.result}</div>
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

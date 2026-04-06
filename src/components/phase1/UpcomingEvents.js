import React from "react";
import styles from "./Phase1.module.css";

const EVENTS = [
  {
    city: "Kolkata",
    date: "3 - 4 July, 2026",
    venue: "Biswa Bangla Exhibition Centre, New Town",
    tag: "Flagship Edition",
    href: "/up-coming",
  },
  {
    city: "Hyderabad",
    date: "Coming Soon",
    venue: "HITEX Exhibition Centre",
    tag: "2026 Series",
    href: "/up-coming",
  },
  {
    city: "Ahmedabad",
    date: "Coming Soon",
    venue: "Gujarat University Convention Centre",
    tag: "2026 Series",
    href: "/up-coming",
  },
];

const UpcomingEvents = ({ onBookStall }) => {
  return (
    <section className={styles.upcomingSection}>
      <div className="container">
        <div className={styles.headerCenter}>
          <span className={styles.eyebrow}>Mark Your Calendar</span>
          <h2 className={styles.sectionTitle}>Upcoming PharmmaEx Events</h2>
          <p className={styles.sectionSub}>
            Reserve your stall at India&apos;s most-attended pharma franchise & manufacturing expos.
          </p>
        </div>
        <div className={styles.eventGrid}>
          {EVENTS.map((e) => (
            <article key={e.city} className={styles.eventCard}>
              <div className={styles.eventTag}>{e.tag}</div>
              <h3 className={styles.eventCity}>{e.city}</h3>
              <div className={styles.eventMeta}>
                <span className={styles.eventDate}>📅 {e.date}</span>
                <span className={styles.eventVenue}>📍 {e.venue}</span>
              </div>
              <div className={styles.eventActions}>
                <a href={e.href} className={styles.btnGhost}>
                  View Details
                </a>
                <button
                  type="button"
                  className={styles.btnPrimary}
                  onClick={() => onBookStall && onBookStall(e.city)}
                >
                  Book Stall
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

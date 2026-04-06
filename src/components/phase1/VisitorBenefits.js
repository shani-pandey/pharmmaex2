import React from "react";
import styles from "./Phase1.module.css";

const POINTS = [
  { icon: "🏭", text: "Meet 500+ verified pharma manufacturers under one roof" },
  { icon: "💼", text: "Compare PCD franchise opportunities & monopoly rights" },
  { icon: "💰", text: "Negotiate the best wholesale & third-party rates directly" },
  { icon: "📦", text: "Discover new molecules, products & packaging innovations" },
  { icon: "🎓", text: "Attend live knowledge sessions from industry leaders" },
  { icon: "🆓", text: "100% free entry with pre-registration" },
];

const VisitorBenefits = ({ onRegister }) => {
  return (
    <section className={styles.visitorSection}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className={styles.eyebrow}>For Visitors</span>
            <h2 className={styles.sectionTitleLeft}>
              Everything a Pharma Buyer Needs — In One Day
            </h2>
            <p className={styles.sectionSubLeft}>
              Whether you&apos;re a doctor, distributor or aspiring franchise owner, PharmmaEx puts every
              opportunity in front of you.
            </p>
            <button type="button" className={styles.btnPrimaryLg} onClick={onRegister}>
              Register Free
            </button>
          </div>
          <div className="col-lg-7">
            <ul className={styles.visitorList}>
              {POINTS.map((p) => (
                <li key={p.text}>
                  <span className={styles.visitorIcon}>{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorBenefits;

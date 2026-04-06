import React, { useState } from "react";
import styles from "./Phase1.module.css";

const FAQS = [
  {
    q: "Who can exhibit at PharmmaEx?",
    a: "Any pharma manufacturer, PCD franchise company, third-party manufacturer, packaging supplier, machinery vendor, ayurvedic/nutraceutical brand or pharma service provider can book a stall.",
  },
  {
    q: "How much does it cost to book a stall?",
    a: "Stall packages start from a value-friendly entry tier and scale up to premium island booths. Download our brochure or request a callback to get the latest pricing for your preferred city.",
  },
  {
    q: "Is visitor entry free?",
    a: "Yes — visitor entry is 100% free with pre-registration. Walk-in entry is also available subject to badge verification.",
  },
  {
    q: "What kind of visitors should I expect?",
    a: "Doctors, retail/wholesale chemists, distributors, stockists, PCD franchise seekers, hospital purchase managers and pharma entrepreneurs. Average footfall is 8,000–12,000 buyers per city.",
  },
  {
    q: "Do you provide leads after the event?",
    a: "Yes. Every exhibitor receives a digital lead report containing visitor scans, contact details and category interest within 7 days of the event.",
  },
  {
    q: "Can I sponsor the event for extra branding?",
    a: "Absolutely. Title, Co-Title, Lanyard, Registration and Networking Sponsorship slots are available. Contact our team for a custom sponsorship deck.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.headerCenter}>
          <span className={styles.eyebrow}>FAQs</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSub}>Everything you need to know before booking your stall or visit.</p>
        </div>
        <div className={styles.faqWrap}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className={styles.faqAnswer}>{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

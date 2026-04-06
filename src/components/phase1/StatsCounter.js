import React, { useEffect, useRef, useState } from "react";
import styles from "./Phase1.module.css";

const STATS = [
  { value: 500, suffix: "+", label: "Exhibitors" },
  { value: 50000, suffix: "+", label: "Visitors" },
  { value: 12, suffix: "+", label: "Cities" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const useCountUp = (end, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return value;
};

const StatItem = ({ value, suffix, label, visible }) => {
  const count = useCountUp(value, 1800, visible);
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsHeader}>
          <span className={styles.eyebrow}>Our Track Record</span>
          <h2 className={styles.sectionTitle}>Trusted by India&apos;s Pharma Leaders</h2>
          <p className={styles.sectionSub}>
            5+ years of delivering high-impact pharma franchise & manufacturing expos across India.
          </p>
        </div>
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

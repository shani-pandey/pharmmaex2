import React from 'react';
import styles from './ticker.module.css';

const Ticker = () => {
  const text = "PharmmaEx Coming to Kolkata | 3–4 July 2026 | Biswa Bangla Mela Prangan (Milan Mela), Opp. Science City, Kolkata • ";

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerInner}>
        <div className={styles.marquee}>
          <span>{text.repeat(5)}</span>
          <span>{text.repeat(5)}</span> {/* duplicate content for seamless scroll */}

        </div>
      </div>
    </div>
  );
};

export default Ticker;

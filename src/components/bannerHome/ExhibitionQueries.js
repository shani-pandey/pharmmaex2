import React from 'react';
import styles from './ExhibitionQueries.module.css';

const ExhibitionQueries = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Exhibition Queries</h2>
            <div className={styles.cardsWrapper}>
                {[1, 2].map((_, idx) => (
                    <div key={idx} className={styles.card}>
                        {/* Image Column */}
                        <div className={styles.imageColumn}>
                            <img
                                src="/assests/img/exhPerson.png"
                                alt="Shivam Sharma"
                                className={styles.image}
                            />
                        </div>
                        {/* Data Column */}
                        <div className={styles.dataColumn}>
                            <div className={styles.nameSection}>
                                <p>Shivam Sharma</p>
                                <p className={styles.roleSection}>Managing Director-PharmmaEx</p>
                            </div>
                            <div className={styles.contactSection}>
                                <p>M. +91-9258002828, +91-701 733 6797</p>
                                <p>E. shivam.sharma@pharmmaex.com</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExhibitionQueries;

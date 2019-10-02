import React from 'react';
import styles from  './Offer.module.css';

function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.slogan}>
          <div className={styles.hireText}>
        <span>Just press </span>
          </div>
        <button className={styles.hireButton}>Hire me</button>
        </div>
      </div>

    </div>
  );
}

export default Offer;

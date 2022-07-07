import React from 'react';
import styles from './LandingPage.module.scss';

// TODO: dodać animacje takie same, ale z gsap
//! Obrazek jako pierwszy, potem tekst

const LandingPage = () => (
  <div className={styles.root}>
    <img src="/images/landing.webp" alt="Archaeomedes" />
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>Archaeomedes</h1>
      <h2 className={styles.subheader}>archaeology in action</h2>
    </div>
  </div>
);

export default LandingPage;

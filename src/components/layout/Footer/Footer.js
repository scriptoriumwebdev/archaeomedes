import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.yearBox}>
      <div className={styles.linkBox}>
        <p className={styles.textFooter}>© 2022</p>
        <a href="https://www.archaeomedes.de/" className={styles.textFooter}>
          Archaeomedes
        </a>
      </div>
      <p className={styles.textFooter}>
        {` `}
        Designed & Coded by{` `}
        <a href="mailto:info@scriptorium.dev">Scriptorium</a>
        {` `}
      </p>
    </div>
  </footer>
);

export default Footer;

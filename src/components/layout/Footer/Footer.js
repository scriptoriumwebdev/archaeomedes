import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <Container className={styles.yearBox}>
      <div className={styles.linkBox}>
        <p className={styles.textFooter}>© 2022</p>
        <a href="#" className={styles.textFooter}>
          Archaeomedes
        </a>
      </div>
      <p className={styles.textFooter}>
        {` `}
        Designed & Coded by <a href="mailto:info@crucialfix.pl">CrucialFix</a>
        {` `}
      </p>
    </Container>
  </footer>
);

export default Footer;

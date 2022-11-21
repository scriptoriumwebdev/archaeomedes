import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <Row className={styles.footerRow}>
      <Col className={`col-12 col-lg-4 order-2 order-md-1 ${styles.footerCol}`}>
        <div className={styles.yearBox}>
          <p className={styles.textFooter}>Archaeomedes GbR</p>
          <p className={styles.textFooter}>Maasstraße 12</p>
          <p className={styles.textFooter}>47623 Kevelaer</p>
          <p className={styles.textFooter}>Nordrhein-Westfalen, Deutschland</p>
        </div>
      </Col>
      <Col className={`col-12 col-lg-4 order-2 order-md-2 ${styles.footerCol}`}>
        <div className={styles.yearBox}>
          <p className={styles.textFooter}>
            © 2022
            {` `}
            <a
              className={styles.footerLinks}
              href="https://www.archaeomedes.de/"
            >
              Archaeomedes
            </a>
          </p>
          <p className={styles.textFooter}>
            Designed & Coded by
            {` `}
            <a
              className={styles.footerLinks}
              href="mailto:info@scriptorium.dev"
            >
              Scriptorium
            </a>
          </p>
        </div>
      </Col>
      <Col className={`col-12 col-lg-4 order-1 order-md-3 ${styles.footerCol}`}>
        <div className={styles.footerInformationsLinks}>
          <NavLink className={styles.textFooter} to="/impressum">
            Impressum
          </NavLink>
          <NavLink className={styles.textFooter} to="/datenschutzerklarung">
            Datenschutzerklärung
          </NavLink>
        </div>
      </Col>
    </Row>
  </footer>
);

export default Footer;

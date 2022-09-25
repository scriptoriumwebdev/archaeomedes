import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import Link from 'react-router';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <Container className={styles.footerRow}>
      <Col col-12 col-lg-4>
        <div className={styles.yearBox}>
          <p>Archaomedes GbR</p>
        </div>
      </Col>
      <Col col-12 col-lg-4>
        <div className={styles.yearBox}>
          <div className={styles.linkBox}>
            <p className={styles.textFooter}>© 2022</p>
            <a
              href="https://www.archaeomedes.de/"
              className={styles.textFooter}
            >
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
      </Col>
      <Col col-12 col-lg-4>
        <div className={styles.footerInformationsLinks}>
          <NavLink to="/impressum">Impressum</NavLink>
          <NavLink to="/datenschutzerklarung">Datenschutzerklärung</NavLink>
        </div>
      </Col>
    </Container>
  </footer>
);

export default Footer;

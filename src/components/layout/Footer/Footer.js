import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <Row className={styles.footerRow}>
      <Col className={`col-12 col-lg-4 ${styles.footerCol}`}>
        <div className={styles.yearBox}>
          <p>Archaomedes GbR</p>
        </div>
      </Col>
      <Col className={`col-12 col-lg-4 ${styles.footerCol}`}>
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
      <Col className={`col-12 col-lg-4 ${styles.footerCol}`}>
        <div className={styles.footerInformationsLinks}>
          <NavLink to="/impressum">Impressum</NavLink>
          <NavLink to="/datenschutzerklarung">Datenschutzerklärung</NavLink>
        </div>
      </Col>
    </Row>
  </footer>
);

export default Footer;

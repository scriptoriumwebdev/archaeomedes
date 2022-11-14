import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Beratung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Beratung = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/services/service1-1.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.aboutUsTextContainer}>
          <SectionHeader>Beratung und Fachgutachten</SectionHeader>
          <p className={styles.serviceText}>
            Wir bieten unsere Fachexpertise, um Sie bei der Planung Ihres
            Vorhabens im Hinblick auf mögliche denkmalrechtliche Auflagen
            umfassend zu beraten. Dabei entwickeln wir für Sie konzeptionelle,
            sachgerechte Lösungswege. Mithilfe unseres Partnernetzwerks können
            wir bei Bedarf verschiedene Fachgutachten erstellen:{` `}
          </p>
          <ul className={styles.beratungList}>
            <li>Archäologie,</li>
            <li>Anthropologie,</li>
            <li>Archäobotanik.</li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Beratung;

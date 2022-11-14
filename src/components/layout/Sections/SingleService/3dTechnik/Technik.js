import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Technik.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Technik = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <div className={styles.aboutUsTextContainer}>
          <SectionHeader>3D Technik</SectionHeader>
          <p className={styles.serviceText}>
            Unsere archäologischen Dienstleistungen werden durch moderne Technik
            unterstützt, vor allem durch Kameradrohnen und GNSS-Systeme, mit den
            dazu passenden Softwarelösungen. Damit erstellen wir mittels{` `}
            <span className={styles.spanWord}>Structure-from-Motion (SfM)</span>
            {` `}
            unterschiedlich skalierte, photogrammetrisch aufgenommene Orthofotos
            von archäologischen Befunden, zudem verschiedene{` `}
            <span className={styles.spanWord}>
              {` `}
              digitale Geländemodelle (DGM, DOM),
            </span>
            {` `}
            sowie <span className={styles.spanWord}>3D-Laserscans</span>
            {` `}
            Unsere archäologischen Ergebnisse werden dadurch in einem
            weitgefassten, räumlichen Kontext abgebildet. Die 3D-Technik
            vereinfacht die digitale Aufarbeitung und steigert unsere Effizienz
            und beschleunigt die Feldarbeit.
          </p>
        </div>
      </Col>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/services/service5.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
    </Row>
  </Container>
);

export default Technik;

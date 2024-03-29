import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Ausgrabung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Ausgrabung = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <div className={styles.serviceTextContainer}>
          <SectionHeader>Archäologische Ausgrabung</SectionHeader>
          <p className={styles.serviceKeywords}>
            Freiland – Stadtkern – Energiestandorte – Baubegleitung
          </p>
          <p className={styles.serviceText}>
            {/* Mittels einer archäologischen Ausgrabung wird ein zuvor
            identifizierter Fundplatz vollflächig erfasst und untersucht. Die
            Ausgrabung findet in der Regel bauvorgreifend statt, zumeist im
            {` `}
            <span className={styles.spanWord}>Freiland </span>oder im
            {` `}
            <span className={styles.spanWord}>Stadtkern, </span> an{` `}
            <span className={styles.spanWord}>Windenergiestandorten, </span>
            sowie entlang von{` `}
            <span className={styles.spanWord}>Gas- oder Stromtrassen. </span>.
            Danach wird die ausgegrabene Fläche denkmalrechtlich freigegeben,
            und die Baugenehmigung kann erteilt werden. */}
            Wir realisieren archäologische Ausgrabungen in Ihrer Projektfläche,
            effizient und mit qualitativ hohen Standards.
          </p>
          <Link className={styles.serviceLink} to="/kontakt">
            Kontakt
          </Link>
        </div>
      </Col>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/services/dig.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
    </Row>
  </Container>
);

export default Ausgrabung;

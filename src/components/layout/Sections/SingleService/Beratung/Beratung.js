import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Beratung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Beratung = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/services/beratungv2.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.serviceTextContainer}>
          <SectionHeader>Archäologische Beratung </SectionHeader>
          <p className={styles.serviceKeywords}>Konzepte – Fachgutachten</p>
          <p className={styles.serviceText}>
            Wir entwickeln Konzepte, um Ihr Bauvorhaben durch sachgerechte,
            effiziente Lösungswege aufzugleisen.
          </p>
          {/* <ul className={styles.beratungList}>
            <li>Archäologie,</li>
            <li>Anthropologie,</li>
            <li>Archäobotanik.</li>
          </ul> */}
          <p className={styles.serviceText}>
            Wir gießen unsere wissenschaftliche Expertise in Fachgutachten, um
            den Erfolg ihres Projekts sicherzustellen.
          </p>
          <Link className={styles.serviceLink} to="/kontakt">
            Kontakt
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Beratung;

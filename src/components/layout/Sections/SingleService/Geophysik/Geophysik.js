import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Geophysik.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Geophysik = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceColGeophysik}`}>
        <img
          src="/images/services/geophysic.webp"
          alt="&nbsp;"
          className={styles.serviceImageGeophysik}
        />
      </Col>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.serviceTextContainer}>
          <SectionHeader>
            Geophysikalische und&nbsp;archäologische Prospektion
          </SectionHeader>
          <p className={styles.serviceKeywords}>
            Geomagnetik – Bodenradar – Geoelektrik – Surveys – Geoarchäologie
          </p>
          <p className={styles.serviceText}>
            Wir führen im Vorfeld non-invasive Prospektionsmethoden durch, um
            archäologische Fundplätze räumlich bestmöglich einzuhegen. Damit
            können wir Folgeschritte risikominimierend darstellen.
          </p>
          <p className={styles.serviceText}>
            Wir setzen auf modernste Technik!
          </p>
          <Link className={styles.serviceLink} to="/kontakt">
            Kontakt
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Geophysik;

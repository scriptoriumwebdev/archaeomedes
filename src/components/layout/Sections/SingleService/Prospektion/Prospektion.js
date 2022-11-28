import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Prospektion.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Prospektion = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/services/prosp2.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.aboutUsTextContainer}>
          <SectionHeader>
            Prospektion und <br /> Sachverhaltsermittlung
          </SectionHeader>
          <p className={styles.serviceText}>
            Eine qualifizierte archäologische Prospektion umfasst einen {` `}
            <span className={styles.spanWord}>Survey</span> mit
            Einzelfundeinmessung zur grobräumlichen Lokalisierung von
            Fundstellen. Daraufhin findet in signifikanten Fundkonzentrationen
            eine{` `}
            <span className={styles.spanWord}>Sachverhaltsermittlung</span>
            {` `}
            statt, welche durch die Anlage von geringflächigen Sondagen die
            Ausdehnung der Fundstelle, ihre Zeitstellung und den
            Erhaltungszustand des archäologischen Kontextes ermittelt. Die
            beiden Methoden dienen zur genaueren Einhegung der archäologischen
            Hinterlassenschaften und unterstützen Sie zielgerichtet bei der
            Planung Ihres Vorhabens.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Prospektion;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Baubegleitung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Baubegleitung = () => (
  <Container className={styles.root}>
    <Row>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.aboutUsTextContainer}>
          <SectionHeader>Baubegleitung</SectionHeader>
          <p className={styles.serviceText}>
            Einige Maßnahmen aus Kanal-, Straßen- oder Trassenbau erfordern eine
            archäologische{` `}
            <span className={styles.spanWord}>baubegleitende Betreuung</span>
            {` `}
            Hier Hier steht Ihnen unser Archäologenteam mit flexiblem
            Personalaufgebot zur Seite, um sämtliche denkmalrechtlich relevante
            Belange fachgerecht zu beurteilen und zu bearbeiten. Wir haben
            Erfahrung in der Zusammenarbeit mit den verschiedenen
            bauausführenden Gewerken.
          </p>
        </div>
      </Col>
      <Col className={`col-12 col-lg-6 ${styles.serviceCol}`}>
        <img
          src="/images/hero.webp"
          alt="&nbsp;"
          className={styles.serviceImage}
        />
      </Col>
    </Row>
  </Container>
);

export default Baubegleitung;

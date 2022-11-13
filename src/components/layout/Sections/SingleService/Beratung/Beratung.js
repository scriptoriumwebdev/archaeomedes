import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Beratung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Beratung = () => (
  <Container className={styles.root}>
    <div className={styles.aboutUsTextContainer}>
      <SectionHeader>Beratung und Fachgutachten</SectionHeader>
      <p>
        Wir bieten unsere Fachexpertise, um Sie bei der Planung Ihres Vorhabens
        im Hinblick auf mögliche denkmalrechtliche Auflagen umfassend zu
        beraten. Dabei entwickeln wir für Sie konzeptionelle, sachgerechte
        Lösungswege. Mithilfe unseres Partnernetzwerks können wir bei Bedarf
        verschiedene Fachgutachten erstellen:{` `}
      </p>
      <ul className={styles.beratungList}>
        <li>Archäologie,</li>
        <li>Anthropologie,</li>
        <li>Archäobotanik.</li>
      </ul>
    </div>
  </Container>
);

export default Beratung;

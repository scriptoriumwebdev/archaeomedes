import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Prospektion.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Prospektion = () => (
  <Container className={styles.root}>
    <div className={styles.aboutUsTextContainer}>
      <SectionHeader>Prospektion und Sachverhaltsermittlung</SectionHeader>
      <p>
        Eine qualifizierte archäologische Prospektion umfasst einen{` `}
        <span className={styles.spanWord}>Survey</span> mit
        Einzelfundeinmessung, zur grobräumlichen Lokalisierung von Fundstellen.
        Daraufhin findet in signifikanten Fundkonzentrationen eine{` `}
        <span className={styles.spanWord}>Sachverhaltsermittlung</span> statt,
        welche durch die Anlage von geringflächigen Sondagen die Ausdehnung der
        Fundstelle, ihre Zeitstellung und den Erhaltungszustand des
        archäologischen Kontexts ermittelt. Die beiden Methoden dienen zur
        genaueren Einhegung der archäologischen Hinterlassenschaften und helfen
        Ihnen für eine bessere Planung Ihres Vorhabens.
      </p>
    </div>
  </Container>
);

export default Prospektion;

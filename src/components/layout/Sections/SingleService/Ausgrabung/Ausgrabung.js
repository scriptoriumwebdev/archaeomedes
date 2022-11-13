import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Ausgrabung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Ausgrabung = () => (
  <Container className={styles.root}>
    <div className={styles.aboutUsTextContainer}>
      <SectionHeader>Ausgrabung</SectionHeader>
      <p>
        Mittels einer archäologischen Ausgrabung wird ein zuvor identifizierter
        Fundplatz vollflächig erfasst und untersucht. Die Ausgrabung findet in
        der Regel bauvorgreifend statt, zumeist im{` `}
        <span className={styles.spanWord}>Freiland </span>oder im
        {` `}
        <span className={styles.spanWord}>Stadtkern, </span> an{` `}
        <span className={styles.spanWord}>Windenergiestandorten, </span>sowie
        entlang von{` `}
        <span className={styles.spanWord}>Gas- oder Stromtrassen. </span>Danach
        wird die ausgegrabene Fläche denkmalrechtlich freigegeben, und die
        Baugenehmigung kann erteilt werden.
      </p>
    </div>
  </Container>
);

export default Ausgrabung;

import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Baubegleitung.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Baubegleitung = () => (
  <Container className={styles.root}>
    <div className={styles.aboutUsTextContainer}>
      <SectionHeader>Baubegleitung</SectionHeader>
      <p>
        Einige Maßnahmen aus Kanal-, Straßen- oder Trassenbau erfordern eine
        archäologische{` `}
        <span className={styles.spanWord}>baubegleitende Betreuung</span> Hier
        steht Ihnen unser Archäologenteam mit flexiblem Personalaufgebot zur
        Seite, um sämtliche denkmalrechtlich relevante Belange fachgerecht zu
        beurteilen und zu bearbeiten. Wir haben Erfahrung in der Zusammenarbeit
        mit den verschiedenen bauausführenden Gewerken.
      </p>
    </div>
  </Container>
);

export default Baubegleitung;

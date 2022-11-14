import React from 'react';
import Technik from '../../layout/Sections/SingleService/3dTechnik/Technik';
import Ausgrabung from '../../layout/Sections/SingleService/Ausgrabung/Ausgrabung';
import Baubegleitung from '../../layout/Sections/SingleService/Baubegleitung/Baubegleitung';
import Beratung from '../../layout/Sections/SingleService/Beratung/Beratung';
import Geophysik from '../../layout/Sections/SingleService/Geophysik/Geophysik';
import Prospektion from '../../layout/Sections/SingleService/Prospektion/Prospektion';

import SectionHeader from '../../common/SectionHeader/SectionHeader';

import styles from './ServicePage.module.scss';

const ServicePage = () => (
  <div className={styles.root}>
    <div className={styles.servicePageHeader}>
      <SectionHeader>Leistungen</SectionHeader>
    </div>
    <div>
      <div id="geophysikalische-prospektion" className={styles.serviceSection}>
        <Geophysik />
      </div>
      <div id="ausgrabung" className={styles.serviceSection}>
        <Ausgrabung />
      </div>
      <div
        id="prospektion-und-sachverhaltsermittlung"
        className={styles.serviceSection}
      >
        <Prospektion />
      </div>
      <div id="3d-technik" className={styles.serviceSection}>
        <Technik />
      </div>
      <div id="beratung-und-fachgutachten" className={styles.serviceSection}>
        <Beratung />
      </div>
      <div id="baubegleitung" className={styles.serviceSection}>
        <Baubegleitung />
      </div>
    </div>
  </div>
);

export default ServicePage;

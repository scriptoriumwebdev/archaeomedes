import React from 'react';
import Technik from '../../layout/Sections/SingleService/3dTechnik/Technik';
import Ausgrabung from '../../layout/Sections/SingleService/Ausgrabung/Ausgrabung';
import Baubegleitung from '../../layout/Sections/SingleService/Baubegleitung/Baubegleitung';
import Beratung from '../../layout/Sections/SingleService/Beratung/Beratung';
import Geophysik from '../../layout/Sections/SingleService/Geophysik/Geophysik';
import Prospektion from '../../layout/Sections/SingleService/Prospektion/Prospektion';

import styles from './ServicePage.module.scss';

const ServicePage = () => (
  <div className={styles.root}>
    <div>
      <Ausgrabung />
      <Beratung />
      <Prospektion />
      <Baubegleitung />
      <Technik />
      <Geophysik />
    </div>
  </div>
);

export default ServicePage;

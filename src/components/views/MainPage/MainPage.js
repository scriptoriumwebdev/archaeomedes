import React from 'react';
import AboutUs from '../../common/AboutUs/AboutUs';
import News from '../../common/News/News';
import Services from '../../common/Services/Services';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <News />
    </section>
    <section>
      <AboutUs />
    </section>
    <section>
      <Services />
    </section>
  </div>
);

export default MainPage;

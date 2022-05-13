import React from 'react';
import AboutUs from '../../common/AboutUs/AboutUs';
import News from '../../common/News/News';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <News />
    </section>
    <section>
      <AboutUs />
    </section>
  </div>
);

export default MainPage;

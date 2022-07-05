import React from 'react';
import LandingPage from '../../common/LandingPage/LandingPage';
import News from '../../common/News/News';
import AboutUs from '../../common/AboutUs/AboutUs';
import Services from '../../common/Services/Services';
import Contact from '../../common/Contact/Contact';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <LandingPage />
    </section>
    <section>
      <News />
    </section>
    <section>
      <AboutUs />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Contact />
    </section>
  </div>
);

export default MainPage;

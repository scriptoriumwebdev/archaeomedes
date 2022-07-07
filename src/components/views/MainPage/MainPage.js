import React from 'react';
import LandingPage from '../../layout/Sections/LandingPage/LandingPage';
import News from '../../layout/Sections/News/News';
import AboutUs from '../../layout/Sections/AboutUs/AboutUs';
import Services from '../../layout/Sections/Services/Services';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <LandingPage />
    </section>
    <section id="news">
      <News />
    </section>
    <section id="aboutUs">
      <AboutUs />
    </section>
    <section id="services">
      <Services />
    </section>
  </div>
);

export default MainPage;

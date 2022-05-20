import React from 'react';
import AboutUs from '../../common/AboutUs/AboutUs';
import Contact from '../../common/Contact/Contact';
import News from '../../common/News/News';
import OurServices from '../../common/OurServices/OurServices';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section id="news">
      <News />
    </section>
    <section id="aboutUs">
      <AboutUs />
    </section>
    <section id="services">
      <OurServices />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default MainPage;

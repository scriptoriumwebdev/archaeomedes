import React from 'react';
import Hero from '../../layout/Sections/Hero/Hero';
import News from '../../layout/Sections/News/News';
import AboutUs from '../../layout/Sections/AboutUs/AboutUs';
import Services from '../../layout/Sections/Services/Services';
import ContactPage from '../ContactPage/ContactPage';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <Hero />
    </section>
    {/* <section id="news">
      <News />
    </section> */}
    <section id="aboutUs">
      <AboutUs />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="services">
      <ContactPage />
    </section>
  </div>
);

export default MainPage;

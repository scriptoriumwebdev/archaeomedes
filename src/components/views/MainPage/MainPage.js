import React from 'react';
import Hero from '../../layout/Sections/Hero/Hero';
// import News from '../../layout/Sections/News/News';
import AboutUs from '../../layout/Sections/AboutUs/AboutUs';
import Services from '../../layout/Sections/Services/Services';

import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.root}>
    <section>
      <Hero />
    </section>
    {/* <section id="news">
      <News />
    </section> */}
    <section id="uber-uns">
      <AboutUs />
    </section>
    <section id="leistungen">
      <Services />
    </section>
  </div>
);

export default MainPage;

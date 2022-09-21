/* eslint-disable comma-dangle */
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';

const Hero = () => {
  const heroItemsRef = useRef(null);
  const [scrollIcon, setScrollIcon] = useState(false);

  const timeline = gsap.timeline({
    duration: 0.5,
    defaults: {
      ease: `Expo.easeInOut`,
    },
  });

  useEffect(() => {
    const heroCover = heroItemsRef.current.children[0];
    const heroTitle = heroItemsRef.current.children[1].children[0];
    const heroSubtitle = heroItemsRef.current.children[1].children[1];

    gsap.set([heroCover, heroTitle, heroSubtitle], {
      opacity: 0,
      y: 30,
    });
    gsap.set([heroTitle], { x: `50%` });
    gsap.set([heroSubtitle], { x: `-100%` });

    timeline
      .to(heroCover, { opacity: 0.4, y: 0 })
      .to([heroTitle, heroSubtitle], { opacity: 1, y: 0, stagger: 0.2 })
      .to(
        [heroTitle, heroSubtitle],
        { x: 0, ease: `Power1.easeInOut` },
        `<0.6`
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleScroll = (event) => {
      if (document.documentElement.scrollTop < 50) {
        setScrollIcon(false);
      } else {
        setScrollIcon(true);
      }
    };
    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <div className={styles.root} ref={heroItemsRef}>
      <img src="/images/hero.webp" alt="Archaeomedes" />
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>
          Archaeology <br /> in action
        </h1>
        <h2 className={styles.subheader}>The past is our future</h2>
      </div>
      <div
        className={
          !scrollIcon ? styles.icon__scroll : styles.icon__scrollHidden
        }
      />
    </div>
  );
};

export default Hero;

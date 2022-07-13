/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './LandingPage.module.scss';

// TODO: dodać animacje takie same, ale z gsap
//! Obrazek jako pierwszy, potem tekst

const LandingPage = () => {
  const landingItemsRef = useRef(null);

  const timeline = gsap.timeline({
    duration: 0.5,
    defaults: {
      ease: `Expo.easeInOut`,
    },
  });

  useEffect(() => {
    const landingCover = landingItemsRef.current.children[0];
    const landingTitle = landingItemsRef.current.children[1].children[0];
    const landingSubtitle = landingItemsRef.current.children[1].children[1];

    gsap.set([landingCover, landingTitle, landingSubtitle], {
      opacity: 0,
      y: 30,
    });
    gsap.set([landingTitle], { x: `50%` });
    gsap.set([landingSubtitle], { x: `-100%` });

    timeline
      .to(landingCover, { opacity: 1, y: 0 })
      .to([landingTitle, landingSubtitle], { opacity: 1, y: 0, stagger: 0.2 })
      .to(
        [landingTitle, landingSubtitle],
        { x: 0, ease: `Power1.easeInOut` },
        `<0.6`
      );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.root} ref={landingItemsRef}>
      <img src="/images/landing.webp" alt="Archaeomedes" />
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Archaeomedes</h1>
        <h2 className={styles.subheader}>archaeology in action</h2>
      </div>
    </div>
  );
};

export default LandingPage;

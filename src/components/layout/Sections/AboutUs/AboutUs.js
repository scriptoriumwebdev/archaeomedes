/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../../common/Button/Button';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import styles from './AboutUs.module.scss';
import aboutUsData from '../../../../data/aboutUs.json';
import utils from '../../../../data/utils.json';

const AboutUs = () => {
  const languageData = aboutUsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  const UtilsButtons = utils.buttons.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  const aboutTextRef = useRef(null);
  const aboutPhotoRef = useRef(null);
  useEffect(() => {
    const aboutText = aboutTextRef.current.children;
    const aboutPhoto = aboutPhotoRef.current;

    gsap.set([aboutText], {
      autoAlpha: 0,
      y: 50,
    });

    gsap.set([aboutPhoto], {
      autoAlpha: 0,
      x: -50,
    });

    ScrollTrigger.batch([aboutText], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.15 },
          y: 0,
        }),
    });

    ScrollTrigger.batch([aboutPhoto], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0.1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.15 },
          x: 0,
        }),
    });

    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set([aboutText, aboutPhoto], { y: 50, autoAlpha: 0 })
    );
  }, []);

  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.aboutUsTextContainer} ref={aboutTextRef}>
        {languageData.aboutShortText.map((item) => (
          <p key={item.id}>{item.value}</p>
        ))}
        <a href="/about">{UtilsButtons.buttonMore}</a>
      </div>
      <img
        src={aboutUsData.mainpagePhotos[0].src}
        alt="&nbsp;"
        className={styles.backgroundImage1}
        ref={aboutPhotoRef}
      />
      <div />
    </Container>
  );
};

export default AboutUs;

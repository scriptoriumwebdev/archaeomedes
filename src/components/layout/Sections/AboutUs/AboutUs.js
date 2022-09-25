/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';
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
      x: 50,
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
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.15 },
          x: 0,
        }),
    });

    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set([aboutText, aboutPhoto], { y: 0, x: 0, autoAlpha: 1 })
    );
  }, []);

  return (
    <div className={styles.root}>
      <Row className={styles.aboutUsRow}>
        <Col className={`col-12 col-lg-6 ${styles.aboutUsTextCol}`}>
          <SectionHeader>{languageData.title}</SectionHeader>
          <img
            src={aboutUsData.mainpagePhotos[0].src}
            alt="&nbsp;"
            className={styles.backgroundImage}
            ref={aboutPhotoRef}
          />
          <div className={styles.aboutUsTextContainer} ref={aboutTextRef}>
            <p>{languageData.aboutText[0].value}</p>
            <p>{languageData.aboutText[2].value}</p>
            {/* {languageData.aboutShortText.map((item) => (
            ))} */}
            <HashLink smooth to="/about">
              <Button>{UtilsButtons.buttonMore} ➔</Button>
            </HashLink>
            {/* <a href="/about"></a> */}
          </div>
          <div />
        </Col>
        <Col
          className={`col-0 col-lg-6 ${styles.aboutUsImgCol}`}
          ref={aboutPhotoRef}
        >
          <img
            src={aboutUsData.mainpagePhotos[0].src}
            alt="&nbsp;"
            className={styles.backgroundImage}
            ref={aboutPhotoRef}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Person from '../../common/Person/Person';

import styles from './AboutUsPage.module.scss';

import aboutUsData from '../../../data/aboutUs.json';
import utils from '../../../data/utils.json';

const AboutUsPage = () => {
  const languageData = aboutUsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  // const teamRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const aboutText = aboutTextRef.current.children;
    // const teamItem = teamRef.current.children;
    // teamItem
    gsap.set([aboutText], {
      autoAlpha: 0,
      y: 50,
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

    // ScrollTrigger.batch([teamItem], {
    //   start: `top bottom -=200px`,
    //   onEnter: (batch) =>
    //     gsap.to(batch, {
    //       autoAlpha: 1,
    //       delay: 0.5,
    //       overwrite: true,
    //       stagger: { each: 0.3 },
    //       y: 0,
    //     }),
    // });

    // teamItem
    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set([aboutText], { y: 0, x: 0, autoAlpha: 1 })
    );
  }, []);

  return (
    <Container className={styles.root}>
      <div className={styles.aboutUsTextContainer} ref={aboutTextRef}>
        <SectionHeader>{languageData.title}</SectionHeader>
        {languageData.aboutText &&
          Array.isArray(languageData.aboutText) &&
          languageData.aboutText.map((item) => (
            <div key={item.id} className={styles.aboutUsItem}>
              {item.type === `image` ? (
                <img
                  src={item.value}
                  alt={`${languageData.title}_${languageData.aboutText.indexOf(
                    item
                  )}`}
                />
              ) : null}
              {item.type === `paragraph` ? (
                <p key={item.id}>{item.value}</p>
              ) : null}
            </div>
          ))}
      </div>
      {/* <SectionHeader>{languageData.teamTitle}</SectionHeader> */}
      {/* <div className={styles.teamGridContainer} ref={teamRef}>
        {languageData.team.map((item) => (
          <Person data={item} key={item.id} />
        ))}
      </div> */}
    </Container>
  );
};

export default AboutUsPage;

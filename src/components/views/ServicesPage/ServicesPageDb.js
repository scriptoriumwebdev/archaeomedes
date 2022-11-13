import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ServicesPageDb.module.scss';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import servicesData from '../../../data/services.json';

const ServicesPage = () => {
  const languageData = servicesData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === `DE`,
  );

  console.log(`test2`, languageData);

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
      // eslint-disable-next-line comma-dangle
      gsap.set([aboutText], { y: 0, x: 0, autoAlpha: 1 })
    );
  }, []);

  return (
    <Container className={styles.root}>
      <div className={styles.aboutUsTextContainer} ref={aboutTextRef}>
        <SectionHeader>{languageData.title}</SectionHeader>
        {languageData.services &&
          Array.isArray(languageData.services) &&
          languageData.services.map((item) => (
            <div key={item.id} className={styles.aboutUsItem}>
              {console.log(`test`, item)}
              {item.title !== `title` ? (
                <p className={styles.aboutUsPageText} key={item.id}>
                  {item.title}
                </p>
              ) : null}
              {item.serviceData &&
                Array.isArray(item.serviceData) &&
                item.serviceData.map((element) => (
                  <div key={element.id} className={styles.aboutUsItem}>
                    {console.log(`test`, element)}
                    {element.type === `paragraph` ? (
                      <p className={styles.aboutUsPageText} key={element.id}>
                        {element.value}
                        {/* {element.filer((word) => word === `strong`) ? (
                          <span
                            className={styles.aboutUsPageText}
                            // key={element.id}
                          >
                            {element.value}
                          </span>
                        ) : null} */}
                      </p>
                    ) : null}
                    {element.type === `list` ? (
                      <ul>
                        <li className={styles.serviceList} key={element.id}>
                          {element.value}
                        </li>
                      </ul>
                    ) : null}
                    {/* {element.type === `strong` ? (
                      <span className={styles.serviceSpan} key={element.id}>
                        {element.value}
                      </span>
                    ) : null} */}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </Container>
  );
};
export default ServicesPage;

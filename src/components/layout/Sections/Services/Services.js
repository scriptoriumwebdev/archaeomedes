/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.scss';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';

import services from '../../../../data/services.json';

const Services = () => {
  const languageData = services.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === `DE`,
  );

  const servicesRef = useRef(null);

  useEffect(() => {
    const servicesItem = servicesRef.current.children;

    gsap.set([servicesItem], {
      autoAlpha: 0,
      x: 50,
    });

    ScrollTrigger.batch([servicesItem], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.2 },
          x: 0,
        }),
    });

    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(servicesItem, { y: 0 })
    );
  }, []);

  return (
    <div className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.cardGrid} ref={servicesRef}>
        {/* //TODO dodać link do usługi */}
        {languageData.services.map((item) => (
          <a
            href={`/leistungen/#${item.titleUrl}`}
            // className={styles.card}
            key={item.id}
          >
            <figure key={item.id} className={styles.card}>
              <img
                src={item.photo}
                alt={item.title}
                className={styles.cardBackground}
              />
              <div className={styles.cardContent}>
                <h4 className="">{item.title}</h4>
              </div>
              <div>
                <p className="">{item.text}</p>
              </div>
            </figure>
            {` `}
          </a>
        ))}
      </div>
      <div />
    </div>
  );
};

export default Services;

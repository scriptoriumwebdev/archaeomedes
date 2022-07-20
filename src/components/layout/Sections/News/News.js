/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '../../../common/Button/Button';
import SectionHeader from '../../../common/SectionHeader/SectionHeader';
import SingleNews from '../../../common/SingleNews/SingleNews';

import styles from './News.module.scss';

import newsData from '../../../../data/news.json';
import utils from '../../../../data/utils.json';

const News = () => {
  const languageData = newsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  const UtilsButtons = utils.buttons.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const newsRef = useRef(null);
  const newsButtonRef = useRef(null);

  useEffect(() => {
    const newsItem = newsRef.current.children;
    const newsButton = newsButtonRef.current;

    gsap.set([newsItem], {
      autoAlpha: 0,
      y: 50,
    });

    gsap.set([newsButton], {
      autoAlpha: 0,
      scaleY: 0.5,
    });

    ScrollTrigger.batch([newsItem], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.3 },
          y: 0,
        }),
    });

    ScrollTrigger.batch([newsButton], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          scaleY: 1,
        }),
    });

    ScrollTrigger.addEventListener(
      `refreshInit`,
      () => gsap.set(newsItem, { y: 50, autoAlpha: 0 }),
      gsap.set(newsButton, { scaleY: 0.5, autoAlpha: 0 })
    );
  }, []);

  return (
    <Container className={styles.root}>
      {/*
    //new Date().toLocaleDateString().replace(/\//g, '.')
    */}
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.newsGridContainer} ref={newsRef}>
        {languageData.news
          .slice(-3)
          .reverse()
          .map((item) => (
            <SingleNews
              key={item.id}
              post={item}
              buttonMore={UtilsButtons.buttonMore}
            />
          ))}
      </div>
      <div className={styles.buttonContainer} ref={newsButtonRef}>
        <Button>{UtilsButtons.buttonMoreNews}</Button>
      </div>
    </Container>
  );
};

export default News;

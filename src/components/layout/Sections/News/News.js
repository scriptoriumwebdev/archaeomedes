/* eslint-disable comma-dangle */
import React from 'react';
import { Container } from 'react-bootstrap';
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

  return (
    <Container className={styles.root}>
      {/*
    //TODO Dodać news.json
    //TODO Grid + komponent singleNews w common mapowanie 3 ostatnie na stronie głównej
    //TODO stylowanie newsów
    //new Date().toLocaleDateString().replace(/\//g, '.')
    */}
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.newsGridContainer}>
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
      <div className={styles.buttonContainer}>
        <Button>{UtilsButtons.buttonMoreNews}</Button>
      </div>
    </Container>
  );
};

export default News;

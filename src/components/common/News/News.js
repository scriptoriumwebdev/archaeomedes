/* eslint-disable comma-dangle */
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import SingleNews from '../SingleNews/SingleNews';
import styles from './News.module.scss';
import newsData from '../../../data/news.json';
import utils from '../../../data/utils.json';

const News = () => {
  const languageData = newsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  const UtilsButtons = utils.buttons.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const newsOnPage = 3;

  console.log(`languageData`, languageData);
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
        {languageData.news.slice(0, 3).map((item) => (
          <SingleNews key={item.id} post={item} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button> Read more</Button>
      </div>
    </Container>
  );
};

export default News;

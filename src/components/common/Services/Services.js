import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Services.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

import services from '../../../data/services.json';

const Services = () => {
  const languageData = services.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === `DE`,
  );
  console.log(`languageData`, languageData);
  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.cardGrid}>
        {/* //TODO dodać link do usługi */}
        {languageData.services.map((item) => (
          <a
            href={`/services/#${item.title}`}
            className={styles.card}
            key={item.id}
          >
            <figure>
              <img
                src={item.photo}
                alt={item.title}
                className={styles.cardBackground}
              />
              <div className={styles.cardContent}>
                <h4 className="">{item.title}</h4>
              </div>
            </figure>
          </a>
        ))}
      </div>
      <div />
    </Container>
  );
};

export default Services;

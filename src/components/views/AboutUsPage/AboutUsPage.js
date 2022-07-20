/* eslint-disable comma-dangle */
import React from 'react';
import { Container, Row } from 'react-bootstrap';

import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Person from '../../common/Person/Person';

import aboutUsData from '../../../data/aboutUs.json';
import utils from '../../../data/utils.json';
import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  const languageData = aboutUsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.aboutUsTextContainer}>
        {languageData.aboutText &&
          Array.isArray(languageData.aboutText) &&
          languageData.aboutText.map((item) => (
            <div key={item.id}>
              {item.type === `image` ? (
                <img
                  src={item.value}
                  alt={`${languageData.title}_${languageData.aboutText.indexOf(
                    item
                  )}`}
                />
              ) : null}
              {item.type === `paragraph` ? <p>{item.value}</p> : null}
            </div>
          ))}
      </div>
      <SectionHeader>{languageData.teamTitle}</SectionHeader>
      <div className={styles.teamGridContainer}>
        {languageData.team.map((item) => (
          <Person data={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default AboutUsPage;

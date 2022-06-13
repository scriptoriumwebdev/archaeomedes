import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './AboutUs.module.scss';
import aboutUsData from '../../../data/aboutUs.json';
import utils from '../../../data/utils.json';

const AboutUs = () => {
  const languageData = aboutUsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  const UtilsButtons = utils.buttons.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );
  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.aboutUsTextContainer}>
        <p>{languageData.aboutText[0] && languageData.aboutText[0].text}</p>
        <p>{languageData.aboutText[1] && languageData.aboutText[1].text}</p>
        {/* onClick={() => visitPage(`/aboutUs`)} */}
        <Button>{UtilsButtons.buttonMore}</Button>
      </div>
      <div className={styles.buttonTeamContainer}>
        <figure className={styles.buttonTeamFigure}>
          <Button>{languageData.buttonTeam}</Button>
          <img
            src={aboutUsData.mainpagePhotos[1].src}
            alt="&nbsp;"
            className={styles.backgroundImage2}
          />
        </figure>
      </div>
      <img
        src={aboutUsData.mainpagePhotos[0].src}
        alt="&nbsp;"
        className={styles.backgroundImage1}
      />
    </Container>
  );
};

export default AboutUs;

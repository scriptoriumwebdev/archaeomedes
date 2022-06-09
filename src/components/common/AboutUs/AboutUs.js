import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './AboutUs.module.scss';
import data from '../../../data/aboutUs.json';

const AboutUs = () => (
  <Container className={styles.root}>
    <SectionHeader> About Us </SectionHeader>
    {console.log(data)}
    <div className={styles.aboutUsTextContainer}>
      {data.mainpageText.map((item) => {
        console.log(`item`, item);
        return <p key={item.id}>{item.text}</p>;
      })}
    </div>
    <Button>Our Team</Button>
  </Container>
);

export default AboutUs;

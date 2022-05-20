import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
// import styles from './AboutUs.module.scss';

const AboutUs = () => (
  <Container>
    <SectionHeader> About Us </SectionHeader>
    <Button> Our team</Button>
  </Container>
);

export default AboutUs;

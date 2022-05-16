import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';

// import styles from './News.module.scss';

const News = () => (
  <Container>
    <SectionHeader> News </SectionHeader>
    <Button> Read more</Button>
  </Container>
);

export default News;

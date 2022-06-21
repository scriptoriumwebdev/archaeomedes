import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleNews.module.scss';
import Button from '../Button/Button';

const SingleNews = ({ post }) => (
  <div className={styles.root}>
    <div className={styles.postContent}>
      <div className={styles.postHeader}>
        <h6 className={styles.postTitle}>{post.title}</h6>
        <p>20.06.2022</p>
      </div>
      <p>{post.shortText}</p>
      <Button>More</Button>
    </div>
    <svg>
      <rect />
    </svg>
  </div>
);

SingleNews.propTypes = {
  post: PropTypes.object,
};
export default SingleNews;

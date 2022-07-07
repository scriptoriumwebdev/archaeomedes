import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleNews.module.scss';
import Button from '../Button/Button';

const SingleNews = ({ post, buttonMore }) => {
  console.log(``);
  return (
    <div className={styles.root}>
      <div className={styles.postContent}>
        <div className={styles.postHeader}>
          <h6 className={styles.postTitle}>{post.title}</h6>
          <p>{post.date}</p>
        </div>
        <p>{post.shortText}</p>
        <Button>{buttonMore}</Button>
      </div>
      <svg>
        <rect />
      </svg>
      <div className={styles.postBG}>
        <img src={post.photos[0].src} alt={post.photos[0].src} />
      </div>
    </div>
  );
};

SingleNews.propTypes = {
  post: PropTypes.object,
  buttonMore: PropTypes.string,
};
export default SingleNews;

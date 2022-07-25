/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import styles from './Paginate.module.scss';

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const previousPage = (currentPage) => {
    if (currentPage === 1) return null;
    return paginate(currentPage - 1);
  };

  const nextPage = (currentPage) => {
    if (currentPage === pageNumbers.length) return null;
    return paginate(currentPage + 1);
  };

  return (
    <div className={styles.root}>
      <Pagination className={styles.pagination}>
        {pageNumbers.map((number) => (
          <Pagination.Item
            className={styles.pageItem}
            key={number}
            disabled={number === currentPage}
            onClick={() => paginate(number)}
          >
            {`\u2022`}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

Paginate.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

export default Paginate;

/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SingleNews from '../../common/SingleNews/SingleNews';

import Paginate from '../../utils/Paginate/Paginate';

import newsData from '../../../data/news.json';
import utils from '../../../data/utils.json';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
  const languageData = newsData.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const UtilsButtons = utils.buttons.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const newsRef = useRef(null);

  useEffect(() => {
    const newsItem = newsRef.current.children;

    gsap.set([newsItem], {
      autoAlpha: 0,
      y: 50,
    });


    ScrollTrigger.batch([newsItem], {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          overwrite: true,
          stagger: { each: 0.3 },
          y: 0,
        }),
    });


    ScrollTrigger.addEventListener(
      `refreshInit`,
      () => gsap.set(newsItem, { y: 50, autoAlpha: 0 }),
    );
  }, []);



  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = languageData.news
    .slice(0)
    .reverse()
    .slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: `smooth` });
  };


  return (
    <div className={styles.root}>
      <Container className={styles.newsContainer}>
        <div className={styles.newsGridContainer} ref={newsRef}>
          {currentPosts.map((item) => (
            <SingleNews
              variant="newspage"
              key={item.id}
              post={item}
              buttonMore={UtilsButtons.buttonMore}
            />
          ))}
        </div>
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={languageData.news.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </Container>
    </div>
  );
};

export default NewsPage;

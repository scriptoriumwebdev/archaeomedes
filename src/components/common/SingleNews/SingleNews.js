import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './SingleNews.module.scss';
import Button from '../Button/Button';

const SingleNews = ({ post, buttonMore }) => {
  const [modal, setModal] = useState(false);
  const [modalScrollArrow, setModalScrollArrow] = useState(false);

  const modalBody = useRef(null);

  const scrollbarVisible = () => {
    const element = modalBody.current;

    if (element.scrollHeight > element.clientHeight) {
      setModalScrollArrow(true);
    } else {
      setModalScrollArrow(false);
    }
    element.onscroll = function () {
      if (element.scrollTop === element.scrollHeight - element.clientHeight) {
        setModalScrollArrow(false);
      } else {
        setModalScrollArrow(true);
      }
    };
  };

  const scrollDown = () => {
    const element = modalBody.current;
    element.scrollBy({ top: 100, left: 0, behavior: `smooth` });
  };

  const openModal = async () => {
    document.body.style.overflow = `hidden`;
    await setModal(true);
    scrollbarVisible();
  };

  const closeModal = () => {
    document.body.style.overflow = `unset`;
    setModal(false);
  };

  return (
    <div className={!modal ? styles.root : styles.modal}>
      {modal ? (
        <button
          type="button"
          className={styles.icon}
          onClick={() => closeModal()}
        >
          X
        </button>
      ) : null}
      {modal ? (
        <div className={styles.modalDialog}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>
              <h6 className={styles.postTitle}>{post.title}</h6>
            </div>
            <div className={styles.modalBody} ref={modalBody}>
              {post.text &&
                Array.isArray(post.text) &&
                post.text.map((item) => (
                  <div className={styles.modalBodyText}>
                    {item.type === `image` ? (
                      <img
                        src={item.value}
                        alt={`${post.title}_${post.text.indexOf(item)}`}
                      />
                    ) : null}
                    {item.type === `paragraph` ? <p>{item.value}</p> : null}
                  </div>
                ))}
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                onClick={() => scrollDown()}
                className={
                  modalScrollArrow
                    ? styles.modalScrollArrow
                    : styles.modalScrollArrow__hidden
                }
              >{`\u2193`}</button>
              <p>{post.date}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.postContent}>
            <div className={styles.postHeader}>
              <h6 className={styles.postTitle}>{post.title}</h6>
              <p>{post.date}</p>
            </div>
            <p>{post.shortText}</p>
            <Button onClick={() => openModal()}>{buttonMore}</Button>
          </div>
          <svg>
            <rect />
          </svg>
          <div className={styles.postBG}>
            <img src={post.backgroundPhoto} alt={post.title} />
          </div>
        </div>
      )}
    </div>
  );
};

SingleNews.propTypes = {
  post: PropTypes.object,
  buttonMore: PropTypes.string,
};
export default SingleNews;

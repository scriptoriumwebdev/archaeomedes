import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.scss';

const Person = ({ data }) => {
  const [caption, setCaption] = useState(false);

  const handleHover = () => {
    setCaption(true);
  };
  const handleOut = () => {
    setCaption(false);
  };
  return (
    <div className={styles.root}>
      <figure
        key={data.id}
        className={styles.personContainer}
        onMouseLeave={() => handleOut()}
        onMouseEnter={() => handleHover()}
      >
        <img src={data.photo} alt={data.name} />
        <figcaption
          className={caption ? styles.caption : styles.caption__hidden}
        >
          <h3>{data.name}</h3>
          <div className={styles.captionContent}>
            <p>{data.text}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

Person.propTypes = {
  data: PropTypes.object,
};

export default Person;

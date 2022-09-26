/* eslint-disable comma-dangle */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

import styles from './SectionHeader.module.scss';

const SectionHeader = ({ variant = ``, ...otherProps }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerItem = headerRef.current;
    gsap.set([headerItem], {
      autoAlpha: 0,
    });

    ScrollTrigger.batch(headerItem, {
      start: `top bottom -=200px`,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          delay: 0.5,
          scaleY: 1,
        }),
    });

    ScrollTrigger.addEventListener(`refreshInit`, () =>
      gsap.set(headerItem, { scaleY: 1, autoAlpha: 1 })
    );
  }, []);

  return (
    <div ref={headerRef} className={styles.root}>
      <p {...otherProps} />
    </div>
  );
};

SectionHeader.propTypes = {
  variant: PropTypes.string,
};

export default SectionHeader;

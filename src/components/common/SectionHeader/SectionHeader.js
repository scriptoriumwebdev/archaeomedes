import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionHeader.module.scss';

const SectionHeader = ({ variant = ``, ...otherProps }) => (
  <div>
    <p
      {...otherProps}
      className={
        styles.root +
        variant
          .split(` `)
          .map((name) => ` ${styles[name] || name}`)
          .join(``)
      }
    />
  </div>
);

SectionHeader.propTypes = {
  variant: PropTypes.string,
};

export default SectionHeader;

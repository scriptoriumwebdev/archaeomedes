import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ variant = ``, ...otherProps }) => (
  <button
    type="button"
    {...otherProps}
    className={
      styles.root +
      variant
        .split(` `)
        .map((name) => ` ${styles[name] || name}`)
        .join(``)
    }
  />
);

Button.propTypes = {
  variant: PropTypes.string,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Component = ({
  children,
  iconName,
  iconsList,
  alternativeIcon,
  size,
}) => (
  <div>
    {(iconName === `` || iconsList[iconName]) === undefined ? (
      <FontAwesomeIcon icon={alternativeIcon} size={size} />
    ) : (
      <FontAwesomeIcon icon={iconsList[iconName]} size={`${size}x`} />
    )}
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  iconName: PropTypes.string.isRequired,
  iconsList: PropTypes.object.isRequired,
  alternativeIcon: PropTypes.object.isRequired,
  size: PropTypes.number,
};

export { Component as IconsGenerator, Component as IconsGeneratorComponent };

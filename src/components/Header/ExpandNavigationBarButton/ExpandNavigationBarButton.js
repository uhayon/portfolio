import React from 'react';
import PropTypes from 'prop-types';

import styles from './ExpandNavigationBarButton.module.scss';

const ExpandNavigationBarButton = ({ handleNavButtonPress, isMobileScreen }) => (
  <button 
    className={`${styles.navigationBarExpandButton} ${!isMobileScreen ? styles.hidden : ''}`}
    onClick={handleNavButtonPress}>
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="64" viewBox="0 0 96 64">
      <g transform="translate(104 -16) rotate(90)">
        <rect width="16" height="96" rx="2" transform="translate(16 8)" fill="#fff"/>
        <rect width="16" height="96" rx="2" transform="translate(40 8)" fill="#fff"/>
        <rect width="16" height="96" rx="2" transform="translate(64 8)" fill="#fff"/>
      </g>
    </svg>
  </button>
);

ExpandNavigationBarButton.propTypes = {
  isMobileScreen: PropTypes.bool,
  handleNavButtonPress: PropTypes.func.isRequired
}

export default ExpandNavigationBarButton;
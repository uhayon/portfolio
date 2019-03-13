import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToggleNavigationBarButton.module.scss';

const ToggleNavigationBarButton = ({ handleNavButtonPress, isMobileScreen, isExpandButton }) => (
  <button 
    className={`${styles.navigationBarToggleButton} ${!isMobileScreen ? styles.hidden : ''}`}
    onClick={handleNavButtonPress}>
    {
      isExpandButton ?
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="64" viewBox="0 0 96 64">
        <g transform="translate(104 -16) rotate(90)">
          <rect width="16" height="96" rx="2" transform="translate(16 8)" fill="#fff"/>
          <rect width="16" height="96" rx="2" transform="translate(40 8)" fill="#fff"/>
          <rect width="16" height="96" rx="2" transform="translate(64 8)" fill="#fff"/>
        </g>
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" width="77.54" height="77.539" viewBox="0 0 77.54 77.539">
        <path d="M-3050.532-377.218l-26.87-26.87-26.87,26.87a2,2,0,0,1-2.829,0l-8.485-8.485a2,2,0,0,1,0-2.829l26.87-26.87-26.87-26.87a2,2,0,0,1,0-2.829l8.485-8.485a2,2,0,0,1,2.829,0l26.87,26.87,26.87-26.87a2,2,0,0,1,2.829,0l8.485,8.485a2,2,0,0,1,0,2.829l-26.87,26.87,26.87,26.87a2,2,0,0,1,0,2.829l-8.485,8.485a2,2,0,0,1-1.414.585A2,2,0,0,1-3050.532-377.218Z"
          transform="translate(3116.172 454.172)"
          fill="#fff" />
      </svg>
    }
  </button>
);

ToggleNavigationBarButton.propTypes = {
  isMobileScreen: PropTypes.bool,
  handleNavButtonPress: PropTypes.func.isRequired
}

export default ToggleNavigationBarButton;
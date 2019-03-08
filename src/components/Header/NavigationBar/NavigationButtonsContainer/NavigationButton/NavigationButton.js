import React from 'react';

import styles from './NavigationButton.module.scss';

const NavigationButton = ({ selectedLanguage, buttonOptions }) => (
  <li className={styles.navigationButton}>
    <a href={`#${buttonOptions.sectionId}`} className={styles.link}>{buttonOptions.title[selectedLanguage]}</a>
  </li>
);

export default NavigationButton;
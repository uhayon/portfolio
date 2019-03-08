import React from 'react';

import spanishIcon from '../../../../assets/icon-spanish.png';
import englishIcon from '../../../../assets/icon-english.png';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = ({ selectedLanguage, handleLanguageSwitch }) => (
  <div id='languageSwitcher' onClick={handleLanguageSwitch} className={styles.languageSwitcher}>
    <div className={`${styles.switchBlocker} ${selectedLanguage === 'ES' ? styles.switchBlockerRight : null}`}></div>
    <img src={spanishIcon} alt='Spanish Language' width='35px' height='35px' className={selectedLanguage === 'EN' ? styles.languageOff : null} />
    <img src={englishIcon} alt='English Language' width='35px' height='35px' className={selectedLanguage === 'ES' ? styles.languageOff : null} />
  </div>
);

export default LanguageSwitcher;
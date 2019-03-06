import React from 'react';

import spanishIcon from '../../../assets/icon-spanish.png';
import englishIcon from '../../../assets/icon-english.png';

import { languageSwitcher, switchBlocker, switchBlockerRight, languageOff } from './LanguageSwitcher.module.scss';

const LanguageSwitcher = ({ selectedLanguage, handleLanguageSwitch }) => (
  <div id='languageSwitcher' onClick={handleLanguageSwitch} className={languageSwitcher}>
    <div className={`${switchBlocker} ${selectedLanguage === 'ES' ? switchBlockerRight : null}`}></div>
    <img src={spanishIcon} alt='Spanish Language' width='35px' height='35px' className={selectedLanguage === 'EN' ? languageOff : null} />
    <img src={englishIcon} alt='English Language' width='35px' height='35px' className={selectedLanguage === 'ES' ? languageOff : null} />
  </div>
);

export default LanguageSwitcher;
import React from 'react';
import PropTypes from 'prop-types';

import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

import { header } from './Header.module.scss';

const Header = ({ selectedLanguage, handleLanguageSwitch }) => {
  return (
    <header className={header}>
      <LanguageSwitcher selectedLanguage={selectedLanguage} handleLanguageSwitch={handleLanguageSwitch} />
    </header>
  )
}

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired
}

export default Header;
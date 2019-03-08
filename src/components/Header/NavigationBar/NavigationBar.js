import React from 'react';
import PropTypes from 'prop-types';

import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

import styles from './NavigationBar.module.scss';

const NavigationBar = ({ selectedLanguage, handleLanguageSwitch, isExpanded, isSideBar, toggleSidebarExpansion }) => {
  return (
    <>
    {
      isSideBar ?
      <div 
      className={`${styles.sidebarContainer} ${isExpanded ? styles.sidebarExpanded : ''}`}
      onClick={toggleSidebarExpansion}>
      </div> :
      null
    }
    <nav 
      onClick={(event) => event.stopPropagation()}
      className={`${isSideBar ? styles.sidebar : styles.navbar} ${isSideBar && isExpanded ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <LanguageSwitcher selectedLanguage={selectedLanguage} handleLanguageSwitch={handleLanguageSwitch} />
    </nav>
    </>
  )
};

NavigationBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired
}

export default NavigationBar;
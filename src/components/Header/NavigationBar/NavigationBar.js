import React from 'react';
import PropTypes from 'prop-types';

import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import ToggleNavigationBarButton from '../ToggleNavigationBarButton/ToggleNavigationBarButton';
import NavigationButtonsContainer from './NavigationButtonsContainer/NavigationButtonsContainer';

import styles from './NavigationBar.module.scss';

const NavigationBar = ({ selectedLanguage, handleLanguageSwitch, isExpanded, isSideBar, toggleSidebarExpansion, buttons }) => {
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
        className={`${isSideBar ? styles.sidebar : styles.navbar} ${isSideBar && isExpanded ? styles.sidebarOpen : ''}`}>
        <div className={styles.closeButtonContainer}>
          <ToggleNavigationBarButton
            isMobileScreen={isSideBar}
            handleNavButtonPress={toggleSidebarExpansion} />
        </div>
        <NavigationButtonsContainer selectedLanguage={selectedLanguage} buttons={buttons} isSideBar={isSideBar} />
        <LanguageSwitcher selectedLanguage={selectedLanguage} handleLanguageSwitch={handleLanguageSwitch} />
      </nav>
    </>
  )
};

NavigationBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  isSideBar: PropTypes.bool,
  toggleSidebarExpansion: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired
}

export default NavigationBar;
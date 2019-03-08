import React from 'react';

import NavigationButton from './NavigationButton/NavigationButton';

import styles from './NavigationButtonsContainer.module.scss';

const NavigationButtonsContainer = ({ selectedLanguage, buttons, isSideBar }) => (
  <ul className={`${styles.navigationButtonList} ${isSideBar ? styles.verticalList : styles.horizontalList}`}>
    {
      buttons.map(button => {
        return (
          <NavigationButton 
            key={button.sectionId}
            selectedLanguage={selectedLanguage} 
            buttonOptions={button} />
        )
      })
    }
  </ul>
);

export default NavigationButtonsContainer;
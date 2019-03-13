import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './NavigationBar/NavigationBar';
import Logo from '../Logo/Logo';
import ToggleNavigationBarButton from './ToggleNavigationBarButton/ToggleNavigationBarButton';

import navigationButtons from './NavigationBarButtons.json';

import styles from './Header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileScreen: this.isMobileScreen(),
      navigationBarExpanded: false,
      navigationBarFixed: this.getNavigationBarFixed()
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setIsMobileScreen);
    window.addEventListener('scroll', this.setNavigationBarFixed);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setIsMobileScreen);
    window.removeEventListener('scroll', this.setNavigationBarFixed);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.selectedLanguage !== this.props.selectedLanguage || 
      nextState.navigationBarExpanded !== this.state.navigationBarExpanded ||
      nextState.isMobileScreen !== this.state.isMobileScreen ||
      nextState.navigationBarFixed !== this.state.navigationBarFixed
    );
  }

  getNavigationBarFixed = () => {
    return window.scrollY >= 30;
  }

  setNavigationBarFixed = () => {
    this.setState(prevState => ({
      ...prevState,
      navigationBarFixed: this.getNavigationBarFixed()
    }));
  }

  setIsMobileScreen = () => {
    const isMobileScreen = this.isMobileScreen();
    this.setState(prevState => ({
      ...prevState,
      isMobileScreen,
      navigationBarExpanded: isMobileScreen ? prevState.navigationBarExpanded : false
    }));
  }

  isMobileScreen = () => {
    return window.innerWidth < 990;
  }

  handleToggleNavigationBarExpansion = () => {
    this.setState(prevState => ({
      ...prevState,
      navigationBarExpanded: !prevState.navigationBarExpanded
    }), () => {
      const body = document.querySelector('body');
      this.state.navigationBarExpanded ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');
    });
  }

  render() {
    const { selectedLanguage, handleLanguageSwitch } = this.props;
    const { navigationBarExpanded, isMobileScreen, navigationBarFixed} = this.state;
    
    return (
      <header className={`${styles.header} ${navigationBarFixed ? styles.fixed : ''}`}>
        <a href='#home' className={styles.linkLogo}>
          <Logo />
        </a>
        <ToggleNavigationBarButton
          isExpandButton
          isMobileScreen={isMobileScreen}
          handleNavButtonPress={this.handleToggleNavigationBarExpansion} />
        <NavigationBar 
          selectedLanguage={selectedLanguage} 
          toggleSidebarExpansion={this.handleToggleNavigationBarExpansion}
          handleLanguageSwitch={handleLanguageSwitch}
          isExpanded={navigationBarExpanded} 
          isSideBar={isMobileScreen}
          buttons={navigationButtons} />
      </header>
    );
  }
}

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired
}

export default Header;
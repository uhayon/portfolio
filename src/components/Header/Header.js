import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './NavigationBar/NavigationBar';
import Logo from '../Logo/Logo';
import ExpandNavigationBarButton from './ExpandNavigationBarButton/ExpandNavigationBarButton';

import styles from './Header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileScreen: this.isMobileScreen(),
      navigationBarExpanded: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setIsMobileScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setIsMobileScreen);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.selectedLanguage !== this.props.selectedLanguage || 
      nextState.navigationBarExpanded !== this.state.navigationBarExpanded ||
      nextState.isMobileScreen !== this.state.isMobileScreen
    );
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
    }));
  }

  render() {
    const { selectedLanguage, handleLanguageSwitch } = this.props;
    const { navigationBarExpanded, isMobileScreen } = this.state;

    return (
      <header className={styles.header}>
        <a href='#root' className={styles.linkLogo}>
          <Logo />
        </a>
        <ExpandNavigationBarButton
          isMobileScreen={isMobileScreen}
          handleNavButtonPress={this.handleToggleNavigationBarExpansion} />
        <NavigationBar 
          selectedLanguage={selectedLanguage} 
          toggleSidebarExpansion={this.handleToggleNavigationBarExpansion}
          handleLanguageSwitch={handleLanguageSwitch}
          isExpanded={navigationBarExpanded} 
          isSideBar={isMobileScreen} />
      </header>
    );
  }
}

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageSwitch: PropTypes.func.isRequired
}

export default Header;
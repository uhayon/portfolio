import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <header></header>
  )
}

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired
}

export default Header;
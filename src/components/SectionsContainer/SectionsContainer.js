import React from 'react';
import PropTypes from 'prop-types';

import SectionHome from './SectionHome/SectionHome';
import SectionSkills from './SectionSkills/SectionSkills';

const SectionsContainer = ({ selectedLanguage }) => (
  <>
    <SectionHome selectedLanguage={selectedLanguage} />
    <SectionSkills selectedLanguage={selectedLanguage} />
  </>
);

SectionsContainer.propTypes = {
  selectedLanguage: PropTypes.string.isRequired
}

export default SectionsContainer;
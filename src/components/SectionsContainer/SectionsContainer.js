import React from 'react';
import PropTypes from 'prop-types';

import SectionHome from './SectionHome/SectionHome';
import SectionSkills from './SectionSkills/SectionSkills';
import SectionProjects from './SectionProjects/SectionProjects';

const SectionsContainer = ({ selectedLanguage }) => (
  <>
    <SectionHome selectedLanguage={selectedLanguage} />
    <SectionSkills selectedLanguage={selectedLanguage} />
    <SectionProjects selectedLanguage={selectedLanguage} />
  </>
);

SectionsContainer.propTypes = {
  selectedLanguage: PropTypes.string.isRequired
}

export default SectionsContainer;
import React from 'react';

import SectionHome from './SectionHome/SectionHome';

const SectionsContainer = ({ selectedLanguage }) => (
  <>
    <SectionHome selectedLanguage={selectedLanguage} />
  </>
);

export default SectionsContainer;
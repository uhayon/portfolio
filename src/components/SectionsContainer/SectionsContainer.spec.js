import React from 'react';
import { shallow } from 'enzyme';

import SectionsContainer from './SectionsContainer';
import SectionHome from './SectionHome/SectionHome';
import SectionSkills from './SectionSkills/SectionSkills';
import SectionProjects from './SectionProjects/SectionProjects';

describe('Mouting Sections Container', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SectionsContainer selectedLanguage='EN' />));

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have the SectionHome, SectionSkills, SectionProject and SectionContact as children', () => {
    const childrenSections = [SectionHome, SectionSkills, SectionProjects];
    expect(wrapper.prop('children').length).toBeDefined();
    expect(wrapper.prop('children').length).toEqual(3);
    childrenSections.forEach(child => {
      expect(wrapper.exists(child));
    })
  })
});
import React from 'react';
import { shallow } from 'enzyme';

import SkillCategory from './SkillCategory';

describe('Mounting Skill Category', () => {
  it('Should match the snapshot', () => {
    const category = {
      title: {
        EN: 'title'
      },
      skills: []
    };

    const wrapper = shallow(<SkillCategory category={category} categoryName='tools' selectedLanguage='EN' />);
    expect(wrapper).toMatchSnapshot();
  });
});
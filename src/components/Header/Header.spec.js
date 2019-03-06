import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Mounting Header', () => {
  it('Must match snapshot without crashing', () => {
    const setSelectedLanguage = jest.fn();
    const wrapper = shallow(<Header setSelectedLanguage={setSelectedLanguage} selectedLanguage='EN' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Must have selectedLanguage and setSelectedLanguage props', () => {
    const setSelectedLanguage = jest.fn();
    const wrapper = mount(<Header setSelectedLanguage={setSelectedLanguage} selectedLanguage='EN' />);

    expect(wrapper.prop('selectedLanguage')).toBeDefined();
    expect(wrapper.prop('setSelectedLanguage')).toBeDefined();
    expect(typeof wrapper.prop('setSelectedLanguage')).toEqual('function');

    wrapper.unmount()
  });
});
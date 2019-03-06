import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Mounting Header', () => {
  let component;
  const handleLanguageSwitch = jest.fn(() => 'ES');
  beforeEach(() => component = <Header handleLanguageSwitch={handleLanguageSwitch} selectedLanguage='EN' />);

  it('Must match snapshot without crashing', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('Must have selectedLanguage and setSelectedLanguage props', () => {
    const wrapper = mount(component);

    expect(wrapper.prop('selectedLanguage')).toBeDefined();
    expect(wrapper.prop('handleLanguageSwitch')).toBeDefined();
    expect(typeof wrapper.prop('handleLanguageSwitch')).toEqual('function');

    wrapper.unmount()
  });
});
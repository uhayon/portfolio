import React from 'React';
import { shallow, mount } from 'enzyme';

import NavigationBar from './NavigationBar';
import NavigationButton from './NavigationButtonsContainer/NavigationButton/NavigationButton';
import navigationButtons from '../NavigationBarButtons.json';

describe('Mounting NavigationBar', () => {
  let component;
  beforeEach(() => component = <NavigationBar selectedLanguage='EN' handleLanguageSwitch={jest.fn()} isExpanded={false} isSideBar={false} toggleSidebarExpansion={jest.fn()} buttons={navigationButtons} />);

  it('Must match snapshot', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();    
  })

  it('Must match titles by selected language', () => {
    const wrapper = mount(component)
    expect(wrapper.find(NavigationButton).length).toEqual(navigationButtons.length); 

    wrapper.find(NavigationButton).forEach((navButton, i) => {
      expect(navButton.find('a').text()).toEqual(navigationButtons[i].title.EN);
    });

    wrapper.setProps({ selectedLanguage: 'ES' });
    wrapper.find(NavigationButton).forEach((navButton, i) => {
      expect(navButton.find('a').text()).toEqual(navigationButtons[i].title.ES);
    });
  })
});
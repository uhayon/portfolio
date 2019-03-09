import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from '../Header/Header';
import SectionsContainer from '../SectionsContainer/SectionsContainer';
// import Footer from '../Footer/Footer';


describe('Mounting app', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('Must match snapshot without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render Header component, Footer component and SectionsContainer component', () => {
    const childrenSections = [Header, SectionsContainer/*, Footer*/];
    childrenSections.forEach(child => {
      expect(wrapper.exists(child)).toEqual(true);
    })
  });
});
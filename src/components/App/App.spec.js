import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from '../Header/Header';
// import SectionsContainer from '../SectionsContainer/SectionsContainer';
// import Footer from '../Footer/Footer';


describe('Mounting app', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('Must match snapshot without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render Header component, Footer component and SectionsContainer component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    // expect(wrapper.containsMatchingElement(<SectionsContainer />)).toEqual(true);
    // expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
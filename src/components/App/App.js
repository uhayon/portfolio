import React from 'react';
import Header from '../Header/Header';
import SectionsContainer from '../SectionsContainer/SectionsContainer';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      language: this.getLanguage()
    }
  }

  getLanguage = () => {
    let language = localStorage.getItem('language');
    if (language) return language;

    language = navigator.language;
    if (language) {
      const [browserLanguage, _] = language.split('-');
      language = browserLanguage.toUpperCase();
    } else {
      language = 'EN';
    }

    localStorage.setItem('language', language);
    return language;
  }
  
  render() {
    return (
      <>
        <Header />
        <SectionsContainer />
        <Footer />
      </>
    );
  }
}

export default App;

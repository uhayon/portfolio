import React from 'react';
import Header from '../Header/Header';
import SectionsContainer from '../SectionsContainer/SectionsContainer';
// import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      language: this.getInitialLanguage()
    }
  }

  getInitialLanguage = () => {
    let language = localStorage.getItem('language');
    if (language) return language;

    language = navigator.language;
    if (language) {
      const [browserLanguage] = language.split('-');
      language = browserLanguage.toUpperCase();
    } else {
      language = 'EN';
    }

    localStorage.setItem('language', language);
    return language;
  }

  handleLanguageSwitch = () => {
    const language = this.state.language === 'EN' ? 'ES' : 'EN';
    localStorage.setItem('language', language);
    this.setState({ language });
  }
  
  render() {
    return (
      <>
        <Header selectedLanguage={this.state.language} handleLanguageSwitch={this.handleLanguageSwitch} />
        <SectionsContainer />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;

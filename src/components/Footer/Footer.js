import React from 'react';

import SocialNetworks from './SocialNetworks/SocialNetworks';
import ContactForm from './ContactForm/ContactForm';

import styles from './Footer.module.scss';

const Footer = ({ selectedLanguage }) => {
  const developedYear = 2019;
  const currentYear = (new Date()).getFullYear();
  const copyrigthPeriod = developedYear === currentYear ? currentYear.toString() : `${developedYear} - ${currentYear}`;
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeading}>
        <SocialNetworks selectedLanguage={selectedLanguage} />
        <ContactForm selectedLanguage={selectedLanguage} />
      </div>
      <div className={styles.copyright}>
        {`${selectedLanguage === 'EN' ? 'Designed & Developed by Uriel Hayon' : 'Diseñado y desarrollado por Uriel Hayon'} © ${copyrigthPeriod}`}
      </div>
    </footer>
  );
};

export default Footer;
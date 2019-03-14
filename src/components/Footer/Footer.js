import React from 'react';

import SocialNetworks from './SocialNetworks/SocialNetworks';

import styles from './Footer.module.scss';

const Footer = ({ selectedLanguage }) => (
  <footer className={styles.footer}>
    <SocialNetworks selectedLanguage={selectedLanguage} />
  </footer>
);

export default Footer;
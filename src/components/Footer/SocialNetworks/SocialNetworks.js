import React from 'react';

import Logo from '../../Logo/Logo';
import IconLinkedIn from '../../Icons/IconLinkedIn';
import IconGithub from '../../Icons/IconGithub';

import styles from './SocialNetworks.module.scss';

const SocialNetworks = ({ selectedLanguage }) => (
  <div className={styles.socialNetworkContainer}>
    <Logo prefixColor='#ffffff' suffixColor='#ffffff' height='45px' />
    <p>{selectedLanguage === 'EN' ? `Let's work together and make great things!` : 'Trabajemos juntos y logremos grandes cosas!'}</p>
    <div className={styles.socialNetworkLinksContaier}>
    <a href='https://www.linkedin.com/in/uhayon/' target='_blank' rel='noopener noreferrer'><IconLinkedIn /></a>
    <a href='https://github.com/uhayon' target='_blank' rel='noopener noreferrer'><IconGithub /></a>
    </div>
  </div>
);

export default SocialNetworks;
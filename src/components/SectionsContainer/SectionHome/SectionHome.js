import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionHome.module.scss';

const Title = ({ selectedLanguage }) => (
  <h2>
    {
      selectedLanguage === 'EN' ?
      'Hi! I\'m uRi, a full stack developer' :
      'Hola! Soy uRi, un desarrollador full stack' 
    }
  </h2>
);

const Body = ({ selectedLanguage }) => (
  <>
    {
      selectedLanguage === 'EN' ?
      <p>Programming is my passion. I've been doing it for over 5 years and I'm always looking for ways to grow every day.</p> :
      <p>Programar es mi pasión. He estado haciéndolo por más de 5 años y siempre estoy buscando maneras de crecer y mejorar día a día.</p>
    }
    {
      selectedLanguage === 'EN' ?
      <p>
        I want to deliver products that are way better than expected. 
        Not just aesthetically pleasing; I want them to <span className={styles.important}>add value to your business</span>, helping you <span className={styles.important}>boost performance</span>
      </p> :
      <p>
        Quiero entregar productos que sean mucho mejor de lo esperado.
        No solamente que se vean bien, quiero que <span className={styles.important}>le den valor agregado a tu negocio</span>, ayudándote a <span className={styles.important}>mejorar tu desempeño</span>
      </p>
    }
    {
      selectedLanguage === 'EN' ?
      <h4>If there is anything on the site that is of interest to you or you have any questions at all, please do not hesitate to reach out!</h4> :
      <h4>Si viste algo que fue de tu interés o tenés alguna consulta, por favor no dudes en contactarme!</h4>
    }
  </>
)

const SectionHome = ({ selectedLanguage }) => (
    <section id='home' className={styles.sectionHome}>
      <div className={styles.bodyContainer}>
        <div className={styles.textsContainer}>
          <Title selectedLanguage={selectedLanguage} />
          <Body selectedLanguage={selectedLanguage} />
          <button className={styles.contactButton} onClick={() => window.location.href = '#contact'}>
            {
              selectedLanguage === 'EN' ?
              'Contact Me' :
              'Contactame'
            }
          </button>
        </div>
      </div>
    </section>
);

SectionHome.propTypes = {
  selectedLanguage: PropTypes.string.isRequired
}

export default SectionHome;
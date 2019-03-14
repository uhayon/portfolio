import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionContact.module.scss';

class SectionContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      name: '',
      mail: '',
      company: '',
      motive: '',
      message: ''
    }
  }

  render() {
    render (
      <section className={styles.sectionContent}>
        <SocialNetworks selectedLanguage={selectedLanguage} />
      {/* <h4>If there is anything on the site that is of interest to you or you have any questions at all, please do not hesitate to reach out!</h4> :
      <h4>Si viste algo que fue de tu interés o tenés alguna consulta, por favor no dudes en contactarme!</h4> */}
      </section>
    )
  }
}

SectionContact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired
}

export default SectionContact;
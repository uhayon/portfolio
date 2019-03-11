import React from 'react';
import PropTypes from 'prop-types';

import SkillCategory from './SkillCategory/SkillCategory';

import styles from './SectionSkills.module.scss';

class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialSkills();
  }

  getInitialSkills = () => {
    return {
      frontend: {},
      backend: {},
      database: {},
      mobile: {},
      tools: {}
    };
  }

  componentDidMount() {
    fetch('https://ur-portfolio-api.herokuapp.com/technologies')
      .then(response => response.json())
      .then(({_id, ...rest}) => this.setState({...rest}))
      .catch(err => this.setState(this.getInitialSkills()));
  }

  render() {
    const { selectedLanguage } = this.props;

    return (
      <section id='skills' className={styles.sectionSkills}>
        <h2>{selectedLanguage === 'EN' ? 'These are mi skills' : 'Estas son mis habilidades'}</h2>
        <div className={styles.sectionsContainer}>
          {
            Object.keys(this.state).map(category => {
              const skills = this.state[category].skills;
              return skills && skills.length ? <SkillCategory key={category} selectedLanguage={selectedLanguage} categoryName={category} category={this.state[category]} /> : null
            })
          }
        </div>
      </section>
    );
  }
};

SectionSkills.propTypes = {
  selectedLanguage: PropTypes.string.isRequired
}

export default SectionSkills;
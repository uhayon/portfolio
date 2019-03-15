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
      tools: {},
      searchingSkills: false
    };
  }

  componentDidMount() {
    this.setState({
      searchingSkills: true
    }, () => {
      fetch('https://ur-portfolio-api.herokuapp.com/technologies')
      .then(response => response.json())
      .then(({_id, ...rest}) => this.setSkills(rest))
      .catch(err => this.setSkills(this.getInitialSkills()));
    });
  }

  setSkills = (skills) => {
    this.setState({
      ...skills,
      searchingSkills: false
    })
  }

  render() {
    if (this.state.searchingSkills) {
      return <div>Loading...</div>;
    }

    const { selectedLanguage } = this.props;

    return (
      <section id='skills' className={styles.sectionSkills}>
        <h2>{selectedLanguage === 'EN' ? 'These are my skills' : 'Estas son mis habilidades'}</h2>
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
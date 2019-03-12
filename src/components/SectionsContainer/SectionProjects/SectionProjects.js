import React from 'react';

import ProjectThumbnail from './ProjectThumbnail/ProjectThumbnail';

import styles from './SectionProjects.module.scss';

class SectionProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('https://ur-portfolio-api.herokuapp.com/projects/latest')
      .then(response => response.json())
      .then((projects) => this.setState({projects}))
      .catch(err => this.setState({ projects: [] }));
  }

  render() {
    const { selectedLanguage } = this.props;
    return (
      <section id='projects' className={styles.sectionProjects}>
        <h2>{selectedLanguage === 'EN' ? `These are the latest projects I've worked on` : 'Estos son los últimos projectos en los que trabajé'}</h2>
        <div className={styles.sectionsContainer}>
          {
            this.state.projects.map(project => <ProjectThumbnail key={project._id} selectedLanguage={selectedLanguage} project={project} />) 
          }
        </div>
      </section>
    );
  }
};

export default SectionProjects;
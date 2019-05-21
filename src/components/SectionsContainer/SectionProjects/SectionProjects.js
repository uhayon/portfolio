import React from 'react';

import ProjectThumbnail from './ProjectThumbnail/ProjectThumbnail';

import styles from './SectionProjects.module.scss';

class SectionProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      searchingProjects: false
    }
  }

  componentDidMount() {
    this.setState({
      searchingProjects: true
    }, () => {
      fetch('https://ur-portfolio-api.herokuapp.com/projects/latest')
        .then(response => response.json())
        .then((projects) => this.setProjects(projects))
        .catch(err => this.setProjects([]));
    });
  }

  setProjects = (projects) => {
    this.setState({ projects, searchingProjects: false });
  }

  render() {
    const { selectedLanguage } = this.props;

    return (
      <section id='projects' className={styles.sectionProjects}>
        <h2>{selectedLanguage === 'EN' ? 'Latest projects' : 'Últimos proyectos'}</h2>
        <div className={styles.sectionsContainer}>
          {
            this.state.searchingProjects ?
            <div style={{color: 'white'}}>{selectedLanguage === 'EN' ? 'Loading Projects...' : 'Cargando Proyectos...'}</div> :
            this.state.projects.map(project => <ProjectThumbnail key={project._id} selectedLanguage={selectedLanguage} project={project} />) 
          }
        </div>
      </section>
    );
  }
};

export default SectionProjects;